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

        let styleValue;
        switch (this.props.selection) {
            case 'container':
                styleValue = parseInt(this.props.containerStyles[this.props.title].props[this.props.name].val, 10)
                break
            default:
                styleValue = parseInt(this.props.styles[this.props.title].props[this.props.name].val, 10)
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

            switch (this.props.selection) {
                case 'container':
                    styles = this.props.containerStyles;
                    styles[this.props.title].props[event.target.name].val = value;
                    this.props.dispatch({ type: 'UPDATE_CONTAINER_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
                    break
                default:
                    styles[this.props.title].props[event.target.name].val = value;
                    this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
            }
        }
    }

    toggleEnabled = (event) => {
        const name = event.target.name;

        let styles;
        switch (this.props.selection) {
            case 'container':
                styles = this.props.containerStyles;
                break
            default:
                styles = this.props.styles;
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

        switch (this.props.selection) {
            case 'container':
                this.props.dispatch({ type: 'UPDATE_CONTAINER_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
                break
            default:
                this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
          }
        
    }

    render() { 
        let name = this.props.name;
        let style;

        switch (this.props.selection) {
            case 'container':
                style = this.props.containerStyles[this.props.title];
                break
            default:
                style = this.props.styles[this.props.title];
          }

        if (style.props[name].key) {
            let key = style.props[name].key;
            let keyEnabled = style.props[key].enabled;
            let keyVal = style.props[key].val;

            if (!keyEnabled || !style.props[name].showOnValue[keyVal]){
                this.toggleEnabled({target: {name: name, checked: false}})
                return null;
            }
        }
        return ( 
            <Wrapper>
                <InputLabel>
                    <CheckBox 
                        name={name}
                        type="checkbox" 
                        checked={style.props[name].enabled}
                        onChange={this.toggleEnabled}
                    />
                    {style.props[name].alias}:
                </InputLabel>
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

const mapStateToProps = ({ styles, css, containerStyles, containerCss, selection }) => ({ styles, css, containerStyles, containerCss, selection });

export default connect(mapStateToProps)(NumberSelect);