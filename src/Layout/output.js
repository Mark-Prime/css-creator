import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CopyButton from '../Components/copyButton';

const Wrapper = styled.div`
    background: #303030;
    border-top: 2px rgba(255, 255, 255, 0.12) solid;
    display: grid;
    font-family: 'inter', sans-serif;
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
    font-weight: 300;
`

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)((props) => {
    let HTML = `<div class="container">\n\t<${props.tag}>${props.text}</${props.tag}>\n</div>`

    if (props.tag === 'img') {
        HTML = `<div class="container">\n\t<${props.tag} alt="CSSimple" src="${props.text}" />\n</div>`
    }

    let CSS = ``
    let SASS = ``
    let containerCSS = ``;
    let containerSASS = ``;

    if (props.container.css !== '') {
        containerCSS = containerCSS + `.container {\n${props.container.css}}\n\n`
        containerSASS = containerSASS + `.container\n${props.container.css}\n`
    }

    if (props.styles.css !== '') {
        CSS = CSS + `${props.tag} {\n${props.styles.css}}\n\n`
        SASS = SASS + `${props.tag} \n${props.styles.css}\n`
    }

    let selectors = [ 'before', 'after', 'hover', 'active', 'focus', 'target', 'disabled', 'invalid'];

    for (let selector of selectors) {
        if (props[selector] && props[selector].css && props[selector].css !== '') {
            if (selector === 'before') {
                CSS = CSS + `${props.tag}::${selector} {\n\tcontent: '${props.beforeText}';\n${props[selector].css}}\n\n`
                SASS = SASS + `\t&::${selector} \n\t\tcontent: '${props.afterText}';\n${props[selector].css.split('\t').join('\t\t')}\n`
                continue
            }
            if (selector === 'after') {
                CSS = CSS + `${props.tag}::${selector} {\n\tcontent: '${props.afterText}';\n${props[selector].css}}\n\n`
                SASS = SASS + `\t&::${selector} \n\t\tcontent: '${props.afterText}';\n${props[selector].css.split('\t').join('\t\t')}\n`
                continue
            }
            CSS = CSS + `${props.tag}:${selector} {\n${props[selector].css}}\n\n`
            SASS = SASS + `\t&:${selector} \n${props[selector].css.split('\t').join('\t\t')}\n`
        }
            
        if (props[`container_${selector}`] && props[`container_${selector}`].css && props[`container_${selector}`].css !== '') {
            containerCSS = containerCSS + `.container:${selector} {\n${props[`container_${selector}`].css}}\n\n`
            containerSASS = containerSASS + `\t&:${selector}\n\t${props[`container_${selector}`].css}\n`
        }

        if (props[`before_${selector}`] && props[`before_${selector}`].css && props[`before_${selector}`].css !== '') {
            CSS = CSS + `${props.tag}:${selector} ${props.tag}::before {\n${props[`before_${selector}`].css}}\n\n`
            SASS = SASS + `\t&:${selector} \n\t\t&::before \n\t\t${props[`before_${selector}`].css}\n`
        }

        if (props[`after_${selector}`] && props[`after_${selector}`].css && props[`after_${selector}`].css !== '') {
            CSS = CSS + `${props.tag}:${selector} ${props.tag}::after {\n${props[`after_${selector}`].css}}\n\n`
            SASS = SASS + `\t&:${selector}\n\t\t&::after  \n\t\t${props[`after_${selector}`].css}\n`
        }
    }

    return ( 
        <Wrapper style={{"gridTemplateColumns": props.scss ? "33.33% 33.33% 33.33%" : "50% 50%"}}>
            <TextBox>
                <TextBoxHeader>HTML <CopyButton text={HTML} /></TextBoxHeader>
                <TextBoxBody>{HTML}</TextBoxBody>
            </TextBox>
            <TextBox>
                <TextBoxHeader>CSS <CopyButton text={`${containerCSS}${CSS}`} /></TextBoxHeader>
                <TextBoxBody>{`${containerCSS}${CSS}`}</TextBoxBody>
            </TextBox>
            <TextBox style={{"display": !props.scss &&"none"}}>
                <TextBoxHeader>SASS <CopyButton text={`${containerSASS}${SASS}`} /></TextBoxHeader>
                <TextBoxBody>{`${containerSASS}${SASS}`}</TextBoxBody>
            </TextBox>
        </Wrapper>
     );
})