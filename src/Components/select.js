import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

        transition: all 0.2s ease;
        clip-path: polygon(75% 0, 100% 0%, 25% 100%, 0% 100%);
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

        transition: all 0.2s ease;
        clip-path: polygon(0 0, 25% 0, 100% 100%, 75% 100%);
        background-color: #BFBFBF;
    }
`

const CheckBox = styled.input`
    display: none;

    &:checked + ${InputLabel}::before {
        clip-path: polygon(75% 0, 100% 0%, 60% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel}::after {
        clip-path: polygon(0 50%, 25% 50%, 60% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel} {
        color: #fff;
    }
`

const Option = styled.option`

`

const SelectInput = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    width: 44%;

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

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }

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

        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: this.props.selection }})

    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }
        
        styles[this.props.title].props[event.target.name].val = value;
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
            <Wrapper key={this.props.log}>
                <div>
                    <Label>
                        <CheckBox 
                            name={name}
                            type="checkbox" 
                            checked={style.props[name].enabled}
                            onChange={this.toggleEnabled}
                        />
                        <InputLabel>{style.props[name].alias}:</InputLabel>
                    </Label>
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

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(Select);