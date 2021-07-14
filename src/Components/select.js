import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21;
`

const CheckBox = styled.input`

`

const InputLabel = styled.label`

`
const Option = styled.option`

`

const SelectInput = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    width: 31%;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
        text-decoration: line-through;
    }
`

class Select extends Component {

    toggleEnabled = (event) => {
        const name = event.target.name;

        let styles = this.props.styles;
        let style = styles[this.props.title];

        if (event.target.checked) {
            style.enabled = true;
            style.props[name].enabled = true;
        } else {
            style.props[name].enabled = false;

            let keys = Object.keys(style.props);
            let i = 0, len = keys.length;

            let enabled = false

            while (i < len) {
                const key = keys[i];

                if (style.props[key].enabled) {
                    enabled = true;
                }

                i++;
            }

            style.enabled = enabled;
        }

        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles
        styles[this.props.title].props[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    render() { 
        let name = this.props.name;
        let style = this.props.styles[this.props.title];

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
                <div>
                    <InputLabel>
                        <CheckBox 
                            name={name}
                            type="checkbox" 
                            checked={style.props[name].enabled}
                            onChange={this.toggleEnabled}
                        />
                        {style.props[name].alias}:
                    </InputLabel>
                </div>
                <SelectInput 
                    name={name}
                    value={style.props[name].val} 
                    onChange={this.OnStyleChange} 
                    disabled={!style.props[name].enabled}
                >
                    {this.props.options.map(item => (
                        <Option value={item} key={`${name}-${item}`}>
                            {item}
                        </Option>
                    ))}
                </SelectInput>
            </Wrapper>
         );
    }
}

const mapStateToProps = ({ styles, css }) => ({ styles, css });

export default connect(mapStateToProps)(Select);