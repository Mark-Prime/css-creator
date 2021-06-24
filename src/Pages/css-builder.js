import React, { Component } from 'react';
import styled from 'styled-components';
import Output from '../Layout/output';
import Properties from '../Layout/properties';
import Sidebar from '../Layout/sidebar';

const Body = styled.div`
    color: #fff;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
`
const Center = styled.div`
    height: 100vh;
    flex-grow: 1;
    display: grid;
    grid-template-rows: auto 300px;
    grid-gap: 0px;
`

const Centered = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

class CssBuilder extends Component {
    state = { 
        scss: true,
        tag: 'button',
        text: "Button",
        background: '#ffffff',
        style: {
            "fontSize": "16px",
            "padding": "3px",
            "paddingLeft": "3px",
            "paddingTop": "3px",
            "paddingRight": "3px",
            "paddingBottom": "3px",
            "borderWidth": "0px",
            "borderStyle": "solid",
            "textDecoration": 'none',
            "textAlign": 'left',
            "borderRadius": "0px"
        },
        enabled: {
            "fontSize": true,
            "padding": false,
            "paddingLeft": false,
            "paddingTop": false,
            "paddingRight": false,
            "paddingBottom": false,
            "borderWidth": false,
            "borderStyle": false,
            "textDecoration": false,
            "textAlign": false,
            "borderRadius": false
        }
     }

    toggleSCSS = () => {this.setState({scss: this.state.scss ? false : true})}

    setStyle = (style) => {this.setState({style: style})}

    setText = (event) => {this.setState({text: event.target.value})}

    toggleEnabled = (event) => {
        const name = event.target.name
        let enabled = this.state.enabled
        enabled[name] = !enabled[name]
        this.setState({enabled: {...enabled}});
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() { 
        let style = {}

        for (const key in this.state.style) {
            if (Object.hasOwnProperty.call(this.state.style, key)) {
                const value = this.state.style[key];
                if (this.state.enabled[key]) {
                    style[key] = value
                }
            }
        }

        const Display = styled.div`
            background: ${this.state.background};
            position: relative;
            width: 100%;
            overflow-x: hidden;
            overflow-y: auto;
        `

        return ( 
            <Body>
                <Sidebar 
                    functions={{
                        toggleSCSS: this.toggleSCSS,
                        handleChangeComplete: this.handleChangeComplete
                    }} 
                    values = {{
                        scss: this.state.scss,
                        background: this.state.background
                    }}
                />
                <Center>
                    <Display>
                        <Centered>
                            {this.state.tag === 'button' && 
                                (<button style={style}>{this.state.text}</button>)
                            }
                        </Centered>
                    </Display>

                    <Output background={this.state.background} text={this.state.text} enabled={this.state.enabled} style={this.state.style} scss={this.state.scss} tag={this.state.tag}/>
                </Center>
                <Properties 
                    enabled={this.state.enabled} 
                    style={this.state.style}
                    text={this.state.text}
                    background={this.state.background}
                    setStyle={this.setStyle}
                    setText={this.setText}
                    toggleEnabled={this.toggleEnabled}
                />
            </Body>
         );
    }
}
 
export default CssBuilder;