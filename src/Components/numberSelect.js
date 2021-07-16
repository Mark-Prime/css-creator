import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21;
`

const Label = styled.label`
    position: relative;
`

const InputLabel = styled.div`
    display: inline;
    color: #BFBFBF;

    &::before {
        content: "";
        display: inline-block;
        clear: both;
        margin: 6px 3px 0 4px;
        width: 10px;
        height: 10px;

        transition: all 0.1s ease;
        clip-path: polygon(0% 0%, 0 20%, 80% 20%, 80% 100%, 100% 100%, 100% 0%);
        background-color: #BFBFBF;
    }

    &::after {
        content: "";
        display: inline-block;
        clear: both;
        margin: 0 3px 0 4px;
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 7px;

        transition: all 0.1s ease;
        clip-path: polygon(0% 0%, 20% 0, 20% 80%, 100% 80%, 100% 100%, 0% 100%);
        background-color: #BFBFBF;
    }
`

const CheckBox = styled.input`
    display: none;

    &:checked + ${InputLabel}::before {
        clip-path: polygon(75% 0, 100% 0%, 60% 100%, 35% 100%, 35% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel}::after {
        clip-path: polygon(0 50%, 25% 50%, 60% 100%, 35% 100%, 35% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel} {
        color: #fff;
    }
`

const SelectWrapper = styled.div`
    width: 45%;
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
        text-decoration: line-through;
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
        text-decoration: line-through;
    }
`

class NumberSelect extends Component {

    state = {
        suffix: "px",
    }

    OnSuffixChange = (event) => {
        let value = event.target.value

        let styleValue = parseInt(this.props.styles[this.props.title].props[this.props.name].val, 10);

        if (this.props.selection !== 'content') {
            styleValue = parseInt(this.props[this.props.selection][this.props.title].props[this.props.name].val, 10);
        }

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
            
            let styles = this.props.styles;

            if (this.props.selection !== 'content') {
                styles = this.props[this.props.selection]
            }
            
            styles[this.props.title].props[event.target.name].val = value;
            this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: this.props.selection }})
        }
    }

    toggleEnabled = (event) => {
        const name = event.target.name;

        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }

        if (event.target.checked) {
            styles[this.props.title].enabled = true;
            styles[this.props.title].props[name].enabled = true;
        } else {
            styles[this.props.title].props[name].enabled = false;

            let keys = Object.keys(styles[this.props.title].props);
            let i = 0, len = keys.length;

            let enabled = false

            while (i < len) {
                const key = keys[i];

                if (styles[this.props.title].props[key].enabled) {
                    enabled = true;
                }

                i++;
            }

            styles[this.props.title].enabled = enabled;
        }

        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: this.props.selection }})
        
    }

    render() { 
        let name = this.props.name;
    
        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }
        
        let style = styles[this.props.title];

        if (style.props[name].key) {
            let key = style.props[name].key;
            let keyEnabled = style.props[key].enabled;
            let keyVal = style.props[key].val;

            if (!keyEnabled || !style.props[name].showOnValue[keyVal]){
                return null;
            }
        }
        return ( 
            <Wrapper>
                <Label>
                    <CheckBox 
                        name={name}
                        type="checkbox" 
                        checked={style.props[name].enabled}
                        onChange={this.toggleEnabled}
                        key={this.props.log}
                    />
                    <InputLabel>{style.props[name].alias}:</InputLabel>
                </Label>
                <SelectWrapper>
                    <NumberInput 
                        name={name}
                        data-suffix={this.state.suffix}
                        type="number" 
                        min={this.props.min ? this.props.min : 0}
                        max={this.props.max ? this.props.max : "none"}
                        value={parseInt(style.props[name].val, 10)} 
                        onChange={this.OnStyleChange} 
                        disabled={!style.props[name].enabled || this.state.suffix === 'auto'}
                    />

                    <SuffixSelect
                        name={name}
                        min="0" 
                        value={this.state.suffix} 
                        onChange={this.OnSuffixChange} 
                        disabled={!style.props[name].enabled}
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

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(NumberSelect);