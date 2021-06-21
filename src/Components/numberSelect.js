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

const NumberInput = styled.input`
    border: none;
    border-bottom: 1px dotted darkgray;
    outline: none;
    background: #303030;
    color: #fff;
    width: 20%;
    margin-left: 4px;

    &:focus {
        outline: none;
    }
`

class NumberSelect extends Component {

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
                <NumberInput 
                    name={this.props.name}
                    data-suffix="px" 
                    type="number" 
                    min="0" 
                    value={this.props.style[this.props.name].replace('px', '')} 
                    onChange={this.props.OnStyleChange} 
                />
            </Wrapper>
         );
    }
}
 
export default NumberSelect;