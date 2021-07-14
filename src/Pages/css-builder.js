import React, { Component } from 'react';
import styled from 'styled-components';
import Output from '../Layout/output';
import Properties from '../Layout/properties';
import Sidebar from '../Layout/sidebar';
import { connect } from 'react-redux';
import styles from '../Utility/defaults'
import { Helmet } from 'react-helmet';

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

class CssBuilder extends Component {
    state = { 
        scss: true,
        tag: 'button',
        text: "Button",
        background: '#ffffff',
     }

     componentDidMount() {
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles}})
     }

    toggleSCSS = () => {this.setState({scss: this.state.scss ? false : true})}

    setText = (event) => {this.setState({text: event.target.value})}

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() { 
        let style = {}

        for (const key in this.props.styles) {
            if (Object.hasOwnProperty.call(this.props.styles, key)) {
                const value = this.props.styles[key].val;
                if (this.props.styles[key].enabled) {
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

        const Parent = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        `

        const Button = styled.button`
            ${this.props.css}
        `

        return ( 
            <Body>
                <Helmet>
                    <title>CSS {this.state.tag[0].toUpperCase() + this.state.tag.slice(1)} Builder</title>
                </Helmet>
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
                        <Parent>
                            {this.state.tag === 'button' && 
                                (<Button>{this.state.text}</Button>)
                            }
                        </Parent>
                    </Display>
                    <Output 
                        background={this.state.background} 
                        text={this.state.text} 
                        scss={this.state.scss} 
                        tag={this.state.tag}
                    />
                </Center>
                <Properties 
                    text={this.state.text}
                    background={this.state.background}
                    setText={this.setText}
                />
            </Body>
         );
    }
}
 
const mapStateToProps = ({ styles, css }) => ({ styles, css });

export default connect(mapStateToProps)(CssBuilder);