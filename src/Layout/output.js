import React, { Component } from 'react';
import styled from 'styled-components';
import aliases from '../Utility/aliases'

import CopyButton from '../Components/copyButton';

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
    margin: 3px 0 0 0;
    padding: 0 3px 3px 10px;
`

const TextBoxBody = styled.p`
    background: #303030;
    margin-bottom: 0px;
    padding: 0 4px;
    border-radius: 5px 5px 0 0;
    white-space: pre-wrap;

    overflow-x: hidden;
    overflow-y: auto;

    height: calc(100% - 30px);
    width: calc(100% - 18px);

    position: absolute;
    left: 5px;
    bottom: 0;
`

class Output extends Component {
    render() { 

        const HTML = `<body>\n\t<${this.props.tag}>${this.props.text}</${this.props.tag}>\n</body>`
        let CSS = ``
        let SASS = ``

        if (this.props.background !== "#ffffff") {
            CSS = CSS + `body {\n\tbackground: ${this.props.background}\n}\n\n`
            SASS = SASS + `body\n\tbackground: ${this.props.background}\n\n`
        }

        CSS = CSS + `${this.props.tag} {\n`
        SASS = SASS + `${this.props.tag} \n`

        for (const key of Object.keys(this.props.style)) {
            if (this.props.enabled[key]) {
                CSS = CSS + `\t${aliases[key]}: ${this.props.style[key]};\n`
                SASS = SASS + `\t${aliases[key]}: ${this.props.style[key]};\n`
            }
        }

        CSS += '}'

        return ( 
            <Wrapper style={{"gridTemplateColumns": this.props.scss ? "33.33% 33.33% 33.33%" : "50% 50%"}}>
                <TextBox>
                    <TextBoxHeader>HTML <CopyButton text={HTML} /></TextBoxHeader>
                    <TextBoxBody>{HTML}</TextBoxBody>
                </TextBox>
                <TextBox>
                    <TextBoxHeader>CSS <CopyButton text={CSS} /></TextBoxHeader>
                    <TextBoxBody>{CSS}</TextBoxBody>
                </TextBox>
                <TextBox style={{"display": !this.props.scss &&"none"}}>
                    <TextBoxHeader>SASS <CopyButton text={SASS} /></TextBoxHeader>
                    <TextBoxBody>{SASS}</TextBoxBody>
                </TextBox>
            </Wrapper>
         );
    }
}
 
export default Output;