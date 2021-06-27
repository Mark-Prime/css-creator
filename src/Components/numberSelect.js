import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21;
`

const CheckBox = styled.input`

`

const InputLabel = styled.label`

`

const SelectWrapper = styled.div`
    width: 32%;
    display: flex;
    justify-content: space-between;
`

const NumberInput = styled.input`
    border: none;
    border-bottom: 1px dotted darkgray;
    outline: none;
    background: #303030;
    color: #fff;
    width: 45%;
    margin-left: 4px;
    flex: 1 1;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
    }
`

const SuffixSelect = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    flex: 1 1;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
    }
`

class NumberSelect extends Component {

    state = {
        suffix: "px",
    }

    OnSuffixChange = (event) => {
        let value = event.target.value

        let styleValue = parseInt(this.props.styles[this.props.name].val, 10)

        if (isNaN(styleValue)) {
            styleValue = 0
        }

        this.setState({
            suffix: value
        })

        this.OnStyleChange(
            {
                target: {
                    dataset: {
                        suffix: value === 'auto' ? '' : value
                    },
                    value: value === 'auto' ? "auto" : parseInt(styleValue, 10),
                    name: this.props.name
                }
            }
        )
    }

    OnStyleChange = (event) => {
        let suffix = event.target.dataset.suffix
        if (suffix !== 'auto') {
            let value = event.target.value
            if (suffix) { 
                value += suffix
            }
            let styles = {...this.props.styles}
            styles[event.target.name].val = value;
            this.props.dispatch({ type: 'UPDATE_STYLE' , payload: styles})
        }
    }

    toggleEnabled = (event) => {
        const name = event.target.name
        let styles = {...this.props.styles}
        styles[name].enabled = !styles[name].enabled
        this.props.dispatch({ type: 'SET_STYLE' , payload: styles})
    }

    render() { 
        return ( 
            <Wrapper>
                <InputLabel>
                    <CheckBox 
                        name={this.props.name}
                        type="checkbox" 
                        checked={this.props.styles[this.props.name].enabled}
                        onChange={this.toggleEnabled}
                    />
                    {this.props.styles[this.props.name].alias}:
                </InputLabel>
                <SelectWrapper>
                    <NumberInput 
                        name={this.props.name}
                        data-suffix={this.state.suffix}
                        type="number" 
                        min={this.props.min ? this.props.min : 0}
                        max={this.props.max ? this.props.max : "none"}
                        value={parseInt(this.props.styles[this.props.name].val, 10)} 
                        onChange={this.OnStyleChange} 
                        disabled={!this.props.styles[this.props.name].enabled || this.state.suffix === 'auto'}
                    />

                    <SuffixSelect
                        name={this.props.name}
                        min="0" 
                        value={this.state.suffix} 
                        onChange={this.OnSuffixChange} 
                        disabled={!this.props.styles[this.props.name].enabled}
                    >
                        <option value={"px"} key="px">px</option>
                        <option value={"cm"} key="cm">cm</option>
                        <option value={"mm"} key="mm">mm</option>
                        <option value={"in"} key="in">in</option>
                        <option value={"pt"} key="pt">pt</option>
                        <option value={"pc"} key="pc">pc</option>
                        <option value={"%"} key="percent">%</option>
                        <option value={"em"} key="em">em</option>
                        <option value={"rem"} key="rem">rem</option>
                        <option value={"vh"} key="vh">vh</option>
                        <option value={"vw"} key="vw">vw</option>
                        <option value={"ex"} key="ex">ex</option>
                        <option value={"ch"} key="ch">ch</option>
                        <option value={"vmin"} key="vmin">vmin</option>
                        <option value={"vmax"} key="vmax">vmax</option>
                        <option value={"auto"} key="auto">auto</option>
                    </SuffixSelect>
                </SelectWrapper>
            </Wrapper>
         );
    }
}

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(NumberSelect);