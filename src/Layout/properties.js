import React, { Component } from 'react';
import styled from 'styled-components';
import NumberSelect from '../Components/numberSelect'
import Select from '../Components/select'

const Wrapper = styled.div`
    background: #303030;
    border-left: 2px rgba(255, 255, 255, 0.12) solid;
    width: 300px;
    padding: 7px;
`

const Section = styled.div`
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
`

const Input = styled.div`
    display: flex;
    justify-content: space-between;
`

const TextBox = styled.input`
`

const InputLabel = styled.label`

`



class Properties extends Component {

    OnStyleChange = (event) => {
        event.preventDefault()
        let suffix = event.target.dataset.suffix
        let newProps = {...this.props.style}
        let value = event.target.value + suffix
        newProps[event.target.name] = value;
        this.props.setStyle(newProps)
    }

    render() { 
        return ( 
            <Wrapper>
                <Section>
                    <Input>
                        <InputLabel>Display Text: </InputLabel>
                        <TextBox value={this.props.text} onChange={this.props.setText}></TextBox>
                    </Input>
                </Section>
                <hr />
                <Section>
                    <NumberSelect 
                        name="fontSize" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled} 
                    />
                    <Select 
                        name="textAlign" 
                        options={['center', 'left', 'right', 'justify']}
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <Select 
                        name="textDecoration" 
                        options={['none', 'overline', 'line-through', 'underline']}
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                </Section>
                <hr />
                <Section>
                    <NumberSelect 
                        name="padding" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <NumberSelect 
                        name="paddingTop" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <NumberSelect 
                        name="paddingLeft" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <NumberSelect 
                        name="paddingRight" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <NumberSelect 
                        name="paddingBottom" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                </Section>
                <hr />
                <Section>
                    <Select 
                        name="borderStyle" 
                        options={['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']}
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                    <NumberSelect 
                        name="borderWidth" 
                        style={this.props.style} 
                        enabled={this.props.enabled} 
                        OnStyleChange={this.OnStyleChange} 
                        toggleEnabled={this.props.toggleEnabled}
                    />
                </Section>
            </Wrapper>
         );
    }
}
 
export default Properties;