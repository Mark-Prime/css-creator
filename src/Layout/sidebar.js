import React, { Component } from 'react';
import styled from 'styled-components';

import SassLogo from '../imgs/sass-1.svg';

const Wrapper = styled.div`
    background: #303030;
    border-right: 2px rgba(255, 255, 255, 0.12) solid;
    width: 55px;
    cursor: context-menu;
    font-family: 'inter', sans-serif;
`

const Toggle = styled.div`
    text-align: center;
    cursor: pointer;
    height: 35px;
    margin-top: 2px;
    cursor: pointer;
`

const ToggleEnabled = styled.div`
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
`

const ToggleDisabled = styled.div`
    background: rgba(255, 255, 255, 0.16);
    height: 100%;
`

const ToolTip = styled.div`
    background: #303030;
    z-index: 3;
    position: absolute;
    left: 60px;
    padding: 1px 5px 4px 5px;
    border-radius: 5px;
    font-size: 12px;

    ::before {
        content: '';
        background: #303030;
        z-index: 2;
        position: absolute;
        height: .6rem;
        width: 6px;
        top: 50%;
        left: -6px;
        clip-path: polygon(100% 0, 100% 100%, 0 50%);
        transform: translateY(-50%);
    }
`

const ToggleBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    ${ToolTip} {
        display: none;
    }

    &:hover ${ToolTip} {
        display: block;
    }
`

const Tag = styled.div`
    height: 21px;
    margin-top: 2px;
    font-size: 12px;
    background: ${props => props.enabled ? 'rgba(255, 255, 255, .3)' : 'rgba(255, 255, 255, 0.16)'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${ToolTip} {
        display: none;
    }

    &:hover {
        background: ${props => props.enabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)'};

        ${ToolTip} {
            display: block;
        }
    }
`

const CenteredImg = styled.img`
`

class Sidebar extends Component {
    render() { 
        return ( 
            <Wrapper>
                <Toggle onClick={this.props.functions.toggleSCSS}>
                    {this.props.values.scss ? 
                    <ToggleEnabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Disable SASS Output Panel</ToolTip></ToggleBody></ToggleEnabled> :
                    <ToggleDisabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Enable SASS Output Panel</ToolTip></ToggleBody></ToggleDisabled>}
                </Toggle>
                <Tag enabled={this.props.values.tag === 'button'} onClick={() => this.props.functions.changeTag('button')}>{'<button>'}<ToolTip>Select {'<button>'} Tag</ToolTip></Tag>
                <Tag enabled={this.props.values.tag === 'p'} onClick={() => this.props.functions.changeTag('p')}>{'<p>'}<ToolTip>Select {'<p>'} Tag</ToolTip></Tag>
                <Tag enabled={this.props.values.tag === 'a'} onClick={() => this.props.functions.changeTag('a')}>{'<a>'}<ToolTip>Select {'<a>'} Tag</ToolTip></Tag>
                <Tag enabled={this.props.values.tag === 'div'} onClick={() => this.props.functions.changeTag('div')}>{'<div>'}<ToolTip>Select {'<div>'} Tag</ToolTip></Tag>
                <Tag enabled={this.props.values.tag === 'span'} onClick={() => this.props.functions.changeTag('span')}>{'<span>'}<ToolTip>Select {'<span>'} Tag</ToolTip></Tag>
                <Tag enabled={this.props.values.tag === 'img'} onClick={() => this.props.functions.changeTag('img')}>{'<img>'}<ToolTip>Select {'<img>'} Tag</ToolTip></Tag>
            </Wrapper>
         );
    }
}
 
export default Sidebar;