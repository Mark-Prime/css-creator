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
        return ( 
            <Wrapper>
                <Toggle onClick={this.props.functions.toggleSCSS}>
                    {this.props.values.scss ? 
                    <ToggleEnabled><CenteredImg src={SassLogo} alt="SASS" width="70%"/></ToggleEnabled> :
                    <ToggleDisabled><CenteredImg src={SassLogo} alt="SASS" width="70%"/></ToggleDisabled>}
                </Toggle>
                <Toggle onClick={this.toggleColorPicker}>
                    {this.state.popup ? 
                        <ToggleEnabled><ToggleBody>BGC</ToggleBody></ToggleEnabled> :
                        <ToggleDisabled><ToggleBody>BGC</ToggleBody></ToggleDisabled>
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