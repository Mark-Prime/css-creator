import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
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

const Group = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

class EditSelect extends Component {
    
    handleFormChange = (e) => {
        console.log(e.target.value)
        this.props.dispatch({ type: 'SET_SELECTION' , payload: e.target.value})
    }

    render() { 
        let selection = this.props.selection;
        return ( 
            <Wrapper>
                <Group>
                    <Input type="radio" onChange={this.handleFormChange} id='container' name='editSelect' value='container' checked={selection === 'container'}/>
                    <Label htmlFor='container'>Container</Label>
                    <Input type="radio" onChange={this.handleFormChange} id='content' name='editSelect' value='content' checked={selection === 'content'}/>
                    <Label htmlFor='content'>Content</Label>
                    <Input type="radio" onChange={this.handleFormChange} id=':hover' name='editSelect' value='hover' checked={selection === 'hover'}/>
                    <Label htmlFor=':hover'>:hover</Label>
                    <Input type="radio" onChange={this.handleFormChange} id=':active' name='editSelect' value='active' checked={selection === 'active'}/>
                    <Label htmlFor=':active'>:active</Label>
                    <Input type="radio" onChange={this.handleFormChange} id=':focus' name='editSelect' value='focus' checked={selection === 'focus'}/>
                    <Label htmlFor=':focus'>:focus</Label>
                    <Input type="radio" onChange={this.handleFormChange} id=':target' name='editSelect' value='target' checked={selection === 'target'}/>
                    <Label htmlFor=':target'>:target</Label>
                </Group>
            </Wrapper>
         );
    }
}

const mapStateToProps = ({selection}) => ({selection});

export default connect(mapStateToProps)(EditSelect);