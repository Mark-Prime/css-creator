import React, { Component } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

import SassLogo from './sass-1.svg'

const Wrapper = styled.div`
    background: #303030;
    border-right: 2px rgba(255, 255, 255, 0.12) solid;
    width: 50px;
    cursor: context-menu;
`

const PopoutWrapper = styled.div`
    position: absolute;
    z-index: 1;
    left: 57px;
    top: 0;
    background: #303030;
    border: 2px solid rgba(255, 255, 255, 0.12);
    padding: 7px;
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

const ToggleBody = styled.div`
    position: relative;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
`

const CenteredImg = styled.img`
    position: relative;
    left: 35%;
    top: 50%;
    transform: translate(-50%, -50%);
`

class Sidebar extends Component {
    state = {
        "colorEnabled": false
    }

    toggleColorPicker = () => {
        this.setState({colorEnabled: !this.state.colorEnabled})
    }

    render() { 
        return ( 
            <Wrapper>
                <Toggle onClick={this.props.functions.toggleSCSS}>
                    {this.props.values.scss ? 
                    <ToggleEnabled><CenteredImg src={SassLogo} alt="SASS" width="70%"/></ToggleEnabled> :
                    <ToggleDisabled><CenteredImg src={SassLogo} alt="SASS" width="70%"/></ToggleDisabled>}
                </Toggle>
                <Toggle onClick={this.toggleColorPicker}>
                    {this.state.colorEnabled ? 
                        <ToggleEnabled><ToggleBody>BGC</ToggleBody></ToggleEnabled> :
                        <ToggleDisabled><ToggleBody>BGC</ToggleBody></ToggleDisabled>
                    }
                </Toggle>
                {this.state.colorEnabled &&
                    <PopoutWrapper>
                        <SketchPicker
                            color={ this.props.values.background }
                            onChange={ this.props.functions.handleChangeComplete }
                            disableAlpha={true}
                            margin="7px"
                        />
                    </PopoutWrapper>
                }
            </Wrapper>
         );
    }
}
 
export default Sidebar;