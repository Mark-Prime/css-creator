import React from 'react';
import styled from 'styled-components';
import NumberSelect from '../Components/numberSelect'
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
            <hr />
            <NumberSelect 
                name="fontSize" 
                title="Text"
            />
            <Select 
                name="textAlign" 
                options={['center', 'left', 'right', 'justify']}
                title="Text"
            />
            <Select 
                name="textDecoration" 
                options={['none', 'overline', 'line-through', 'underline']}
                title="Text"
            />
        </Expander>
     );    
};