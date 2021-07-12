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

const CheckBox = styled.input`

`

const InputLabel = styled.label`
    
`

class Sidebar extends Component {
    state = {
        "popup": false,
        "enabled": false,
        "color": "#FFFFFF"
    }

    componentDidMount = () => {
        this.setState({
            color: this.props.values.background
        })
    }

    toggleColorPicker = () => {
        this.setState({popup: !this.state.popup})
    }

    toggleEnabled = () => {
        if (this.state.enabled) {
            this.props.functions.handleChangeComplete({hex: "#ffffff"})
        } else {
            this.props.functions.handleChangeComplete({hex: this.state.color})
        }
        this.setState({enabled: !this.state.enabled})
    }

    handleChangeComplete = (color) => {
        this.setState({
            "color": color.hex
        })

        if (this.state.enabled) {
            this.props.functions.handleChangeComplete({hex: color.hex})
        }
    }

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
                <Toggle onClick={this.toggleColorPicker}>
                    {this.state.popup ? 
                        <ToggleEnabled><ToggleBody>BGC<ToolTip>Close Background Color Selector</ToolTip></ToggleBody></ToggleEnabled> :
                        <ToggleDisabled><ToggleBody>BGC<ToolTip>Open Background Color Selector</ToolTip></ToggleBody></ToggleDisabled>
                    }
                </Toggle>
                {this.state.popup &&
                    <PopoutWrapper>
                        <SketchPicker
                            color={ this.state.color }
                            onChange={ this.handleChangeComplete }
                            disableAlpha={true}
                            margin="7px"
                        />
                        <InputLabel>
                            <CheckBox 

                                type="checkbox" 
                                checked={this.state.enabled}
                                onChange={this.toggleEnabled}
                            />
                            background
                        </InputLabel>
                    </PopoutWrapper>
                }
            </Wrapper>
         );
    }
}
 
export default Sidebar;