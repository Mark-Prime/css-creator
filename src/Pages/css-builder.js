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
        styles: {
            "color": {
                val: "#000000",
                enabled: false,
                alias: "color"
            },
            "fontSize": {
                val: "16px",
                enabled: true,
                alias: "font-size"
            },
            "padding": {
                val: "3px",
                enabled: false,
                alias: "padding"
            },
            "paddingLeft": {
                val: "3px",
                enabled: false,
                alias: "padding-left"
            },
            "paddingTop": {
                val: "3px",
                enabled: false,
                alias: "padding-top"
            },
            "paddingRight": {
                val: "3px",
                enabled: false,
                alias: "padding-right"
            },
            "paddingBottom": {
                val: "3px",
                enabled: false,
                alias: "padding-bottom"
            },
            "borderWidth": {
                val: "1px",
                enabled: false,
                alias: "border-width"
            },
            "borderStyle": {
                val: "solid",
                enabled: false,
                alias: "border-style"
            },
            "textDecoration": {
                val: 'none',
                enabled: false,
                alias: "text-decoration"
            },
            "textAlign": {
                val: "left",
                enabled: false,
                alias: "text-align"
            },
            "borderRadius": {
                val: "0px",
                enabled: false,
                alias: "border-radius"
            },
        }
     }

    toggleSCSS = () => {this.setState({scss: this.state.scss ? false : true})}

    setStyle = (style) => {
        this.setState({styles: style})
    }

    setText = (event) => {this.setState({text: event.target.value})}

    toggleEnabled = (event) => {
        const name = event.target.name
        let styles = this.state.styles
        styles[name].enabled = !styles[name].enabled
        this.setState({styles: styles});
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() { 
        let style = {}

        for (const key in this.state.styles) {
            if (Object.hasOwnProperty.call(this.state.styles, key)) {
                const value = this.state.styles[key].val;
                if (this.state.styles[key].enabled) {
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

                    <Output 
                        styles={this.state.styles} 
                        background={this.state.background} 
                        text={this.state.text} 
                        scss={this.state.scss} 
                        tag={this.state.tag}
                    />
                </Center>
                <Properties 
                    styles={this.state.styles}
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