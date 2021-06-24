import React, {Component} from 'react';

import styled from 'styled-components';
import aliases from '../Utility/aliases';

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
        suffix: "px"
    }

    OnSuffixChange = (event) => {
        let value = event.target.value
        this.setState({
            suffix: value
        })
    }

    render() { 
        return ( 
            <Wrapper>
                <InputLabel>
                    <CheckBox 
                        name={this.props.name}
                        type="checkbox" 
                        checked={this.props.enabled[this.props.name]}
                        onChange={this.props.toggleEnabled}
                    />
                    {aliases[this.props.name]}
                </InputLabel>
                <SelectWrapper>
                    <NumberInput 
                        name={this.props.name}
                        data-suffix={this.state.suffix}
                        type="number" 
                        min={this.props.min ? this.props.min : 0}
                        max={this.props.max ? this.props.max : "none"}
                        value={parseInt(this.props.style[this.props.name], 10)} 
                        onChange={this.props.OnStyleChange} 
                        disabled={!this.props.enabled[this.props.name]}
                    />

                    <SuffixSelect
                        name={this.props.name}
                        min="0" 
                        value={this.state.suffix} 
                        onChange={this.OnSuffixChange} 
                        disabled={!this.props.enabled[this.props.name]}
                    >
                        <option value={"px"} key="px">px</option>
                        <option value={"%"} key="percent">%</option>
                        <option value={"em"} key="em">em</option>
                        <option value={"rem"} key="rem">rem</option>
                        <option value={"vh"} key="vh">vh</option>
                        <option value={"vw"} key="vw">vw</option>
                    </SuffixSelect>
                </SelectWrapper>
            </Wrapper>
         );
    }
}
 
export default NumberSelect;