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
    width: 31%;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
    }
`

class Select extends Component {
    render() { 
        return ( 
            <Wrapper>
                <div>
                    <InputLabel>
                        <CheckBox 
                            name={this.props.name}
                            type="checkbox" 
                            checked={this.props.enabled[this.props.name]}
                            onChange={this.props.toggleEnabled}
                        />
                        {aliases[this.props.name]}
                    </InputLabel>
                </div>
                <SelectInput 
                    name={this.props.name}
                    min="0" 
                    value={this.props.style[this.props.name]} 
                    onChange={this.props.OnStyleChange} 
                    disabled={!this.props.enabled[this.props.name]}
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
 
export default Select;