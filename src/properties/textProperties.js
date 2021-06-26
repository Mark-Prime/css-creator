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
                    <TextBox value={this.props.parentProps.text} onChange={this.props.parentProps.setText}></TextBox>
                </Input>
                <ColorSelector 
                    name="color"
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    onStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled} 
                />
                <hr />
                <NumberSelect 
                    name="fontSize" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled} 
                />
                <Select 
                    name="textAlign" 
                    options={['center', 'left', 'right', 'justify']}
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <Select 
                    name="textDecoration" 
                    options={['none', 'overline', 'line-through', 'underline']}
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default TextProperties;