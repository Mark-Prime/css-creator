import React, { Component } from 'react';
import styled from 'styled-components';
import aliases from '../Utility/aliases'

const Wrapper = styled.div`
    background: #303030;
    border-top: 2px rgba(255, 255, 255, 0.12) solid;
    display: grid;
`

const TextBox = styled.div`
    margin: 3px 2px 0;
    padding: 0 4px;
    background: #424242;
    border-radius: 5px 5px 0 0;
    display: grid;
    position: relative;
    grid-template-rows: 5% auto;
`

const TextBoxHeader = styled.h4`
    margin: 0;
    padding: 0 0 0 10px;
`

const TextBoxBody = styled.p`
    background: #303030;
    margin-bottom: 0px;
    padding: 0 4px;
    border-radius: 5px 5px 0 0;
    white-space: pre-wrap;

    overflow-x: hidden;
    overflow-y: auto;

    height: calc(100% - 25px);
    width: calc(100% - 18px);

    position: absolute;
    left: 5px;
    bottom: 0;
`

class Output extends Component {
    render() { 
        return ( 
            <Wrapper style={{"gridTemplateColumns": this.props.scss ? "33.33% 33.33% 33.33%" : "50% 50%"}}>
                <TextBox>
                    <TextBoxHeader>HTML</TextBoxHeader>
                    <TextBoxBody>{`<body>\n\t<${this.props.tag}>${this.props.text}</${this.props.tag}>\n</body>`}</TextBoxBody>
                </TextBox>
                <TextBox>
                    <TextBoxHeader>CSS</TextBoxHeader>
                    <TextBoxBody>
                    {this.props.background === "#ffffff" ||
                        <>{`body {\n\tbackground: ${this.props.background}\n}\n\n`}</>}
                        {this.props.tag} {`{\n`}
                            {Object.keys(this.props.style).map(key => (
                                <>
                                    {this.props.enabled[key] && `\t${aliases[key]}: ${this.props.style[key]};\n`}
                                </>
                            ))}
                        {`}`}
                    </TextBoxBody>
                </TextBox>
                <TextBox style={{"display": !this.props.scss &&"none"}}>
                    <TextBoxHeader>SASS</TextBoxHeader>
                    <TextBoxBody>
                        {this.props.background === "#ffffff" ||
                        <>{`body\n\tbackground: ${this.props.background}\n\n`}</>}
                        {this.props.tag} {`\n`}
                            {Object.keys(this.props.style).map(key => (
                                <>
                                    {this.props.enabled[key] && `\t${aliases[key]}: ${this.props.style[key]};\n`}
                                </>
                            ))}
                    </TextBoxBody>
                </TextBox>
            </Wrapper>
         );
    }
}
 
export default Output;