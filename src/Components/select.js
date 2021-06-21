import React, { Component } from 'react';
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
const Option = styled.option`

`

const SelectInput = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    min-width: 21%;

    &:focus {
        outline: none;
    }
`

class Select extends Component {
    render() { 
        return ( 
            <Wrapper>
                <div>
                    <CheckBox 
                        name={this.props.name}
                        type="checkbox" 
                        checked={this.props.enabled[this.props.name]}
                        onChange={this.props.toggleEnabled}
                    />
                    <InputLabel>{aliases[this.props.name]}</InputLabel>
                </div>
                <SelectInput 
                    name={this.props.name}
                    data-suffix="" 
                    type="number" 
                    min="0" 
                    value={this.props.style[this.props.name]} 
                    onChange={this.props.OnStyleChange} 
                >
                    {this.props.options.map(item => (
                        <Option value={item}>
                            {item}
                        </Option>
                    ))}
                </SelectInput>
            </Wrapper>
         );
    }
}
 
export default Select;