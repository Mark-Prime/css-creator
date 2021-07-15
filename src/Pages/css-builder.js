import React, { Component } from 'react';
import styled from 'styled-components';
import Output from '../Layout/output';
import Properties from '../Layout/properties';
import Sidebar from '../Layout/sidebar';
import { connect } from 'react-redux';
import styles from '../Utility/defaults'
import container from '../Utility/container';
import hover from '../Utility/hover';
import active from '../Utility/active';
import focus from '../Utility/focus';
import target from '../Utility/target';
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
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles, selection: 'content'}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container, selection: 'container'}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: hover, selection: 'hover'}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: active, selection: 'active'}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: focus, selection: 'focus'}})
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: target, selection: 'target'}})
     }

    toggleSCSS = () => {this.setState({scss: this.state.scss ? false : true})}

    setText = (event) => {this.setState({text: event.target.value})}

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() { 
        const Display = styled.div`
            background: ${this.state.background};
            position: relative;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
        `

        const Parent = styled.div`
            ${this.props.container.css}
        `

        let selectors = ['hover', 'active', 'focus', 'target'];
        let extraCSS = ''

        for (let selector of selectors) {
            if (this.props[selector] && this.props[selector].css && this.props[selector].css !== '') {
                extraCSS = extraCSS + `&:hover{\n${this.props.hover.css}}`
            }
        }

        const Button = styled.button`
            ${this.props.styles.css}

            ${extraCSS}
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
                        <Parent key={this.props.log}>
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
 
const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(CssBuilder);