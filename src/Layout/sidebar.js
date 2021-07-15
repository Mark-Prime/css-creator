import React, { Component } from 'react';
import styled from 'styled-components';

import SassLogo from './sass-1.svg'

const Wrapper = styled.div`
    background: #303030;
    border-right: 2px rgba(255, 255, 255, 0.12) solid;
    width: 50px;
    cursor: context-menu;
`

const Toggle = styled.div`
    text-align: center;
    cursor: pointer;
    height: 50px;
    margin-top: 2px;
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

const CenteredImg = styled.img`
`

class Sidebar extends Component {
    render() { 

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

        return ( 
            <Wrapper>
                <Toggle onClick={this.props.functions.toggleSCSS}>
                    {this.props.values.scss ? 
                    <ToggleEnabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Disable SASS Output Panel</ToolTip></ToggleBody></ToggleEnabled> :
                    <ToggleDisabled><ToggleBody><CenteredImg src={SassLogo} alt="SASS" width="70%"/><ToolTip>Enable SASS Output Panel</ToolTip></ToggleBody></ToggleDisabled>}
                </Toggle>
            </Wrapper>
         );
    }
}
 
export default Sidebar;