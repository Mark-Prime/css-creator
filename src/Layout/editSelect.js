import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
    padding: 5px 0;
    border-top: 2px rgba(255, 255, 255, 0.12) solid;
    background: #303030;
`

const Input = styled.input`
    display: none;

    :checked + label {
        border: 1px solid #ccc;
        border-left: 2px solid #ccc;
        border-right: 2px solid #ccc;
        margin: 0;
    }

    :disabled + label {
        color: rgba(255, 255, 255, .4);
    }
`

const Label = styled.label`
    font-size: 12px;
    margin: 0 1px;
    padding: 1px 4px 3px;
    background-color: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(0, 0, 0, .7);
`

const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

class EditSelect extends Component {
    state = { 
        selected: 'button'
     }
    render() { 
        return ( 
            <Wrapper>
                <Group>
                    <Input type="radio" id='container' name='editSelect' value='container' disabled/>
                    <Label for='container'>Container</Label>
                    <Input type="radio" id='button' name='editSelect' value='button' defaultChecked={true} />
                    <Label for='button'>Button</Label>
                    <Input type="radio" id=':hover' name='editSelect' value=':hover' disabled/>
                    <Label for=':hover'>:hover</Label>
                    <Input type="radio" id=':active' name='editSelect' value=':active' disabled/>
                    <Label for=':active'>:active</Label>
                    <Input type="radio" id=':focus' name='editSelect' value=':focus' disabled/>
                    <Label for=':focus'>:focus</Label>
                    <Input type="radio" id=':target' name='editSelect' value=':target' disabled/>
                    <Label for=':target'>:target</Label>
                </Group>
            </Wrapper>
         );
    }
}
 
export default EditSelect;