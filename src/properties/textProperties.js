import React from 'react';
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
 
export default function TextProperties(props) {
    return ( 
        <Expander title="Text">
            <Input>
                <InputLabel>Content: </InputLabel>
                <TextBox value={props.text} onChange={props.setText}></TextBox>
            </Input>
            <ColorSelector 
                name="color"
                onStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled} 
            />
            <hr />
            <NumberSelect 
                name="fontSize" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled} 
            />
            <Select 
                name="textAlign" 
                options={['center', 'left', 'right', 'justify']}
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <Select 
                name="textDecoration" 
                options={['none', 'overline', 'line-through', 'underline']}
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
        </Expander>
     );    
};