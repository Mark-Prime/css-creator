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

    &:disabled {
        color: #BFBFBF;
    }
`

class NumberSelect extends Component {

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
                <NumberInput 
                    name={this.props.name}
                    data-suffix="px" 
                    type="number" 
                    min={this.props.min ? this.props.min : 0}
                    max={this.props.max ? this.props.max : 0}
                    value={this.props.style[this.props.name].replace('px', '')} 
                    onChange={this.props.OnStyleChange} 
                    disabled={!this.props.enabled[this.props.name]}
                />
            </Wrapper>
         );
    }
}
 
export default NumberSelect;