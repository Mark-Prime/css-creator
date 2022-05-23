import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)((props) => {
    let HTML = `<div class="container">\n\t<${props.tag}>${props.text}</${props.tag}>\n</div>`

    if (props.tag === 'img') {
        HTML = `<div class="container">\n\t<${props.tag} alt="CSSimple" src="${props.text}" />\n</div>`
    }

    let CSS = ``
    let SASS = ``

    if (props.container.css !== '') {
        CSS = CSS + `.container {\n${props.container.css}}\n\n`
        SASS = SASS + `.container\n${props.container.css}\n`
    }

    if (props.styles.css !== '') {
        CSS = CSS + `${props.tag} {\n${props.styles.css}}\n\n`
        SASS = SASS + `${props.tag} \n${props.styles.css}\n`
    }

    let selectors = ['hover', 'active', 'focus', 'target'];

    for (let selector of selectors) {
        if (props[selector] && props[selector].css && props[selector].css !== '') {
            CSS = CSS + `${props.tag}:${selector} {\n${props[selector].css}}\n\n`
            SASS = SASS + `\t&:${selector} \n${props[selector].css.split('\t').join('\t\t')}\n`
        }
    }

    return ( 
        <Wrapper style={{"gridTemplateColumns": props.scss ? "33.33% 33.33% 33.33%" : "50% 50%"}}>
            <TextBox>
                <TextBoxHeader>HTML <CopyButton text={HTML} /></TextBoxHeader>
                <TextBoxBody>{HTML}</TextBoxBody>
            </TextBox>
            <TextBox>
                <TextBoxHeader>CSS <CopyButton text={CSS} /></TextBoxHeader>
                <TextBoxBody>{CSS}</TextBoxBody>
            </TextBox>
            <TextBox style={{"display": !props.scss &&"none"}}>
                <TextBoxHeader>SASS <CopyButton text={SASS} /></TextBoxHeader>
                <TextBoxBody>{SASS}</TextBoxBody>
            </TextBox>
        </Wrapper>
     );
})