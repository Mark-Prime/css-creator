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
    left: 62px;
    padding: 1px 5px 4px 5px;
    border-radius: 5px;
    font-size: 12px;
    display: none;
    width: auto;
    min-width: max-content;

    ::before {
        content: '';
        background: #303030;
        z-index: 2;
        position: absolute;
        height: .6rem;
        width: 7px;
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

    &:hover {
        background: ${props => props.enabled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)'};

        ${ToolTip} {
            display: block;
        }
    }
`

const CenteredImg = styled.img`

`

const Counts = styled.div`
    background: rgba(255, 255, 255, 0.10);
    height: 25px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Addition = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.10);
    border: none;
    outline: none;
    cursor: pointer;

    font-size: 12px;
    color: #ffffff;

    &::before {
        content: '';
        clip-path: polygon(10% 40%, 40% 40%, 40% 10%, 60% 10%, 60% 40%, 90% 40%, 90% 60%, 60% 60%, 60% 90%, 40% 90%, 40% 60%, 10% 60%);
        background: rgba(255, 255, 255);
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
    }

    ${ToolTip} {
        position: absolute;
        left: 35px;
        top: 3px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);

        ${ToolTip} {
            display: block;
        }
    }

    &:active {
        background: rgba(255, 255, 255, 0.3);
    }
`

const Subtraction = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.10);
    border: none;
    outline: none;
    cursor: pointer;

    font-size: 12px;
    color: #ffffff;

    &::before {
        content: '';
        clip-path: polygon(10% 40%, 90% 40%, 90% 60%, 10% 60%);
        background: rgba(255, 255, 255);
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
    }

    ${ToolTip} {
        position: absolute;
        top: 3px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);

        ${ToolTip} {
            display: block;
        }
    }

    &:active {
        background: rgba(255, 255, 255, 0.3);
    }
`

const Hr = styled.hr`
    margin: 2px 0;
    border: rgba(255, 255, 255, 0.16) solid 1px;
`

class Sidebar extends Component {
    render() { 
        let ContainerTagOptions = ['div', 'ul', 'ol'];
        let tagOptions = ['button', 'p', 'a', 'div', 'span', 'img', 'li', 'h1', 'h2', 'h3', 'h4'];
        return ( 
            <Wrapper>
                <Toggle onClick={this.props.functions.toggleSCSS}>
                    {this.props.values.scss ? 
                    <ToggleEnabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Disable SASS Output Panel</ToolTip></ToggleBody></ToggleEnabled> :
                    <ToggleDisabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Enable SASS Output Panel</ToolTip></ToggleBody></ToggleDisabled>}
                </Toggle>
                <Hr />
                {ContainerTagOptions.map((tag, index) => {
                    return (
                        <Tag key={index} enabled={this.props.values.containerTag === tag} onClick={() => this.props.functions.changeContainer(tag)}>{tag}</Tag>
                )})}
                <Hr />
                {tagOptions.map((tag, index) => {
                    return <Tag enabled={this.props.values.tag === tag} onClick={() => this.props.functions.changeTag(tag)} key={index}>{tag}<ToolTip>Select {tag} Tag</ToolTip></Tag>
                })}
                <Hr />
                <Counts>
                    <Subtraction onClick={this.props.functions.subtractCount}><ToolTip>Remove a child tag</ToolTip></Subtraction>
                    <Addition onClick={this.props.functions.addCount}><ToolTip>Add a child tag</ToolTip></Addition>
                </Counts>
            </Wrapper>
         );
    }
}
 
export default Sidebar;