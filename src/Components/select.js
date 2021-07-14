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

        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles
        styles[this.props.title].props[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    render() { 
        return ( 
            <Wrapper>
                <div>
                    <InputLabel>
                        <CheckBox 
                            name={this.props.name}
                            type="checkbox" 
                            checked={this.props.styles[this.props.title].props[this.props.name].enabled}
                            onChange={this.toggleEnabled}
                        />
                        {this.props.styles[this.props.title].props[this.props.name].alias}:
                    </InputLabel>
                </div>
                <SelectInput 
                    name={this.props.name}
                    value={this.props.styles[this.props.title].props[this.props.name].val} 
                    onChange={this.OnStyleChange} 
                    disabled={!this.props.styles[this.props.title].props[this.props.name].enabled}
                >
                    {this.props.options.map(item => (
                        <Option value={item} key={`${this.props.name}-${item}`}>
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