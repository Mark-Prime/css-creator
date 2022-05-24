import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    background: #303030;
    font-family: 'inter', sans-serif;
    font-weight: 300;
`

const Input = styled.input`
    display: none;

    :checked + label {
        border: 1px solid #ccc;
        margin: 0;
    }

    :disabled + label {
        color: rgba(255, 255, 255, .4);
    }
`

const Label = styled.label`
    font-size: 12px;
    padding: 1px 4px 3px;
    background-color: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(0, 0, 0, .7);

    cursor: pointer;
`

const Group = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 2px rgba(255, 255, 255, 0.12) solid;
    padding: 5px 2px;
`

class EditSelect extends Component {
    
    handleFormChange = (e) => {
        console.log('HANDLE FORM CHANGE');
        this.props.dispatch({ type: 'SET_SELECTION' , payload: e.target.value})
    }

    handleFormChangeSelector = (e) => {
        console.log('HANDLE FORM CHANGE SELECTOR');
        this.props.dispatch({ type: 'SET_SELECTOR' , payload: e.target.value})
    }

    onClick = (e) => {
        console.log('ON CLICK');
        this.props.dispatch({ type: 'SET_SELECTOR' , payload: ''})
    }

    render() { 
        let selection = this.props.selection;
        let selector = this.props.selector;
        return ( 
            <Wrapper>
                <Group>
                    <Input type="radio" onChange={this.handleFormChange} id='container' name='editSelect' value='container' checked={selection === 'container'}/>
                    <Label htmlFor='container'>Container</Label>
                    <Input type="radio" onChange={this.handleFormChange} id='content' name='editSelect' value='content' checked={selection === 'content'}/>
                    <Label htmlFor='content'>Content</Label>
                    <Input type="radio" onChange={this.handleFormChange} id='before' name='editSelect' value='before' checked={selection === 'before'}/>
                    <Label htmlFor='before'>::before</Label>
                    <Input type="radio" onChange={this.handleFormChange} id='after' name='editSelect' value='after' checked={selection === 'after'}/>
                    <Label htmlFor='after'>::after</Label>
                </Group>
                <Group>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':hover' name='editSelect' value='hover' checked={selector === 'hover'}/>
                    <Label htmlFor=':hover'>:hover</Label>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':active' name='editSelect' value='active' checked={selector === 'active'}/>
                    <Label htmlFor=':active'>:active</Label>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':focus' name='editSelect' value='focus' checked={selector === 'focus'}/>
                    <Label htmlFor=':focus'>:focus</Label>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':target' name='editSelect' value='target' checked={selector === 'target'}/>
                    <Label htmlFor=':target'>:target</Label>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':disabled' name='editSelect' value='disabled' checked={selector === 'disabled'}/>
                    <Label htmlFor=':disabled'>:disabled</Label>
                    <Input type="radio" onChange={this.handleFormChangeSelector} onClick={this.onClick} id=':invalid' name='editSelect' value='invalid' checked={selector === 'invalid'}/>
                    <Label htmlFor=':invalid'>:invalid</Label>
                </Group>
            </Wrapper>
         );
    }
}

const mapStateToProps = ({selection, selector}) => ({selection, selector});

export default connect(mapStateToProps)(EditSelect);