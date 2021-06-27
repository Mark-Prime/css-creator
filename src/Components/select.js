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
    }
`

class Select extends Component {

    toggleEnabled = (event) => {
        const name = event.target.name
        let styles = {...this.props.styles}
        styles[name].enabled = !styles[name].enabled
        this.props.dispatch({ type: 'SET_STYLE' , payload: styles})
    }

    OnStyleChange = (event) => {
        let suffix = event.target.dataset.suffix
        let value = event.target.value
        if (suffix) { 
            value += suffix
        }
        let styles = {...this.props.styles}
        styles[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: styles})
    }

    render() { 
        return ( 
            <Wrapper>
                <div>
                    <InputLabel>
                        <CheckBox 
                            name={this.props.name}
                            type="checkbox" 
                            checked={this.props.styles[this.props.name].enabled}
                            onChange={this.toggleEnabled}
                        />
                        {this.props.styles[this.props.name].alias}:
                    </InputLabel>
                </div>
                <SelectInput 
                    name={this.props.name}
                    value={this.props.styles[this.props.name].val} 
                    onChange={this.OnStyleChange} 
                    disabled={!this.props.styles[this.props.name].enabled}
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

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(Select);