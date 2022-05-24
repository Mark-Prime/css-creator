import React, { Component } from 'react';
import styled from 'styled-components';
import Output from '../Layout/output';
import Properties from '../Layout/properties';
import Sidebar from '../Layout/sidebar';
import { connect } from 'react-redux';
import styles from '../Utility/styles'
import container, {container_hover, container_active, container_focus, container_target, container_disabled, container_invalid} from '../Utility/container';
import before, {before_hover, before_active, before_focus, before_target, before_disabled, before_invalid} from '../Utility/before';
import after, {after_hover, after_active, after_focus, after_target, after_disabled, after_invalid} from '../Utility/after';
import hover from '../Utility/hover';
import active from '../Utility/active';
import focus from '../Utility/focus';
import target from '../Utility/target';
import { Helmet } from 'react-helmet';
import disabled from '../Utility/disabled';
import invalid from '../Utility/invalid';

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

const Display = styled.div`
    background: #ffffff;
    color: #000000;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: initial;

    & *,
    & *::after,
    & *::before {
        margin: initial;
        padding: initial;
        box-sizing: initial;
    }
`

const Parent = styled.div`
    ${props=>props.css}

    ${props=>props.extraCSSContainer}
`

const Button = styled.button`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const P = styled.p`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const A = styled.a`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Div = styled.div`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Span = styled.span`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Img = styled.img`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

class CssBuilder extends Component {
    state = { 
        scss: true,
        tag: 'button',
        text: "Hello World!",
        before: '',
        after: '',
     }

     componentDidMount() {
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles, selection: 'content'}});

        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container, selection: 'container'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_hover, selection: 'container_hover'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_active, selection: 'container_active'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_focus, selection: 'container_focus'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_target, selection: 'container_target'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_disabled, selection: 'container_disabled'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: container_invalid, selection: 'container_invalid'}});

        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after, selection: 'after'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_hover, selection: 'after_hover'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_active, selection: 'after_active'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_focus, selection: 'after_focus'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_target, selection: 'after_target'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_disabled, selection: 'after_disabled'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: after_invalid, selection: 'after_invalid'}});

        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before, selection: 'before'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_hover, selection: 'before_hover'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_active, selection: 'before_active'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_focus, selection: 'before_focus'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_target, selection: 'before_target'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_disabled, selection: 'before_disabled'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: before_invalid, selection: 'before_invalid'}});

        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: hover, selection: 'hover'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: active, selection: 'active'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: focus, selection: 'focus'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: target, selection: 'target'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: disabled, selection: 'disabled'}});
        this.props.dispatch({ type: 'LOAD_CSS' , payload: {styles: invalid, selection: 'invalid'}});
     }

    toggleSCSS = () => {this.setState({scss: this.state.scss ? false : true})}

    changeTag = (tag) => {this.setState({tag: tag})}

    setText = (event) => {
        if (this.props.selection === 'after') {
            this.setState({after: event.target.value})
            return
        }

        if (this.props.selection === 'before') {
            this.setState({before: event.target.value})
            return
        }

        this.setState({text: event.target.value})
    }

    render() { 
        let selectors = ['before', 'after', 'hover', 'active', 'focus', 'target', 'disabled', 'invalid'];
        let extraCSS = ''
        let extraCSSContainer = '';

        for (let selector of selectors) {
            if (this.props[selector] && this.props[selector].css && this.props[selector].css !== '') {
                if (selector === 'before') {
                    extraCSS = extraCSS + `&::${selector} {\n\tcontent: '${this.state.before}';\n${this.props[selector].css}}\n\n`
                    continue;
                }
                if (selector === 'after') {
                    extraCSS = extraCSS + `&::${selector} {\n\tcontent: '${this.state.after}';\n${this.props[selector].css}}\n\n`
                    continue;
                }

                extraCSS = extraCSS + `&:${selector}{\n${this.props[selector].css}}`
            }
            
            if (this.props[`container_${selector}`] && this.props[`container_${selector}`].css && this.props[`container_${selector}`].css !== '') {
                extraCSSContainer = extraCSSContainer + `&:${selector}{\n${this.props[`container_${selector}`].css}}`
            }

            if (this.props[`before_${selector}`] && this.props[`before_${selector}`].css && this.props[`before_${selector}`].css !== '') {
                extraCSS = extraCSS + `&:${selector} {\n&::before {\n${this.props[`before_${selector}`].css}}\n}`
                console.log(extraCSS)
            }

            if (this.props[`after_${selector}`] && this.props[`after_${selector}`].css && this.props[`after_${selector}`].css !== '') {
                extraCSS = extraCSS + `&:${selector} {\n&::after  {\n${this.props[`after_${selector}`].css}}\n}`
                console.log(extraCSS)
            }
        }

        let text = this.state.text;

        if (this.props.selection === 'after') {
            text = this.state.after;
        }

        if (this.props.selection === 'before') {
            text = this.state.before;
        }

        return ( 
            <Body>
                <Helmet>
                    <title>CSSimple</title>
                </Helmet>
                <Sidebar 
                    functions={{
                        toggleSCSS: this.toggleSCSS,
                        changeTag: this.changeTag,
                        
                    }} 
                    values = {{
                        scss: this.state.scss,
                        tag: this.state.tag,
                    }}
                />
                <Center>
                    <Display>
                        <Parent css={this.props.container.css} extraCSSContainer={extraCSSContainer} key={this.props.log}>
                            {this.state.tag === 'button' && 
                                (<Button css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Button>)
                            }
                            {this.state.tag === 'p' && 
                                (<P css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</P>)
                            }
                            {this.state.tag === 'a' && 
                                (<A css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</A>)
                            }
                            {this.state.tag === 'div' && 
                                (<Div css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Div>)
                            }
                            {this.state.tag === 'span' && 
                                (<Span css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Span>)
                            }
                            {this.state.tag === 'img' && 
                                (<Img css={this.props.styles.css} extraCSS={extraCSS} alt="CSSimple" src={this.state.text}/>)
                            }

                        </Parent>
                    </Display>
                    <Output 
                        background={this.state.background} 
                        text={this.state.text} 
                        scss={this.state.scss} 
                        tag={this.state.tag}
                        beforeText={this.state.before}
                        afterText={this.state.after}
                    />
                </Center>
                <Properties 
                    text={text}
                    background={this.state.background}
                    setText={this.setText}
                    tag={this.state.tag}
                />
            </Body>
         );
    }
}
 
const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(CssBuilder);