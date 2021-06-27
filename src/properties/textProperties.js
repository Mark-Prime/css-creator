import React, { Component } from 'react';
import styled from 'styled-components';
import NumberSelect from '../Components/numberSelect'
import ColorSelector from '../Components/colorSelector';
import Select from '../Components/select'
import Expander from '../Components/expander';

const Input = styled.div`
    display: flex;
    justify-content: space-between;
`

const TextBox = styled.input`
`

const InputLabel = styled.label`
    padding-left: 4px;
`

class TextProperties extends Component {
    render() { 
        return ( 
            <Expander title="Text">
                <Input>
                    <InputLabel>Content: </InputLabel>
                    <TextBox value={this.props.text} onChange={this.props.setText}></TextBox>
                </Input>
                <ColorSelector 
                    name="color"
                    onStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled} 
                />
                <hr />
                <NumberSelect 
                    name="fontSize" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled} 
                />
                <Select 
                    name="textAlign" 
                    options={['center', 'left', 'right', 'justify']}
                    OnStyleChange={this.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <Select 
                    name="textDecoration" 
                    options={['none', 'overline', 'line-through', 'underline']}
                    OnStyleChange={this.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default TextProperties;