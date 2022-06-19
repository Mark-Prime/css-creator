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

function range(end) {
    let ans = [];
    for (let i = 1; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

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
        padding: revert;
        margin: revert;
    }
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

const H1 = styled.h1`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const H2 = styled.h2`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const H3 = styled.h3`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const H4 = styled.h4`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Ul = styled.ul`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Ol = styled.ol`
    ${props=>props.css}

    ${props=>props.extraCSS}
`

const Li = styled.li`    
    ${props=>props.css}
    
    ${props=>props.extraCSS}
`

class CssBuilder extends Component {
    state = { 
        scss: true,
        tag: 'button',
        container: 'div',
        text: "Hello World!",
        before: '',
        after: '',
        count: 1,
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
    changeContainer = (tag) => {this.setState({container: tag})}
    addCount = () => {this.setState({count: this.state.count + 1})}
    subtractCount = () => {
        if (this.state.count > 1) {
            this.setState({count: this.state.count - 1})
        }
    }

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

        let Child;
        switch (this.state.tag) {
            case 'button':
                Child = () => <Button css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Button>;
                break;
            case 'p':
                Child = () => <P css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</P>;
                break;
            case 'a':
                Child = () => <A css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</A>;
                break;
            case 'div':
                Child = () => <Div css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Div>;
                break;
            case 'span':
                Child = () => <Span css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Span>;
                break;
            case 'li':
                Child = () => <Li css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Li>;
                break;
            case 'h1':
                Child = () => <H1 css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</H1>;
                break;
            case 'h2':
                Child = () => <H2 css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</H2>;
                break;
            case 'h3':
                Child = () => <H3 css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</H3>;
                break;
            case 'h4':
                Child = () => <H4 css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</H4>;
                break;
            case 'img':
                Child = () => <Img css={this.props.styles.css} extraCSS={extraCSS} alt={'CSSimple'} src={this.state.text}/>;
                break;
            default:
                Child = () => <Button css={this.props.styles.css} extraCSS={extraCSS}>{this.state.text}</Button>;
        };

        let Parent;
        switch (this.state.container) {
            case 'div':
                Parent = (props) => <Div css={this.props.container.css} extraCSS={extraCSSContainer}>{props.children}</Div>;
                break;
            case 'ul':
                Parent = (props) => <Ul css={this.props.container.css} extraCSS={extraCSSContainer}>{props.children}</Ul>;
                break;
            case 'ol':
                Parent = (props) => <Ol css={this.props.container.css} extraCSS={extraCSSContainer}>{props.children}</Ol>;
                break;
            default:
                Parent = (props) => <Div css={this.props.container.css} extraCSS={extraCSSContainer}>{props.children}</Div>;
        };

        return ( 
            <Body>
                <Helmet>
                    <title>CSSimple</title>
                </Helmet>
                <Sidebar 
                    functions={{
                        toggleSCSS: this.toggleSCSS,
                        changeTag: this.changeTag,
                        changeContainer: this.changeContainer,
                        addCount: this.addCount,
                        subtractCount: this.subtractCount,
                    }} 
                    values = {{
                        scss: this.state.scss,
                        tag: this.state.tag,
                        containerTag: this.state.container,
                    }}
                />
                <Center>
                    <Display>
                        <Parent>
                            {range(this.state.count).map((i) => {
                                return <Child key={`CHILD-${i}`} />
                            })}
                        </Parent>
                    </Display>
                    <Output 
                        background={this.state.background} 
                        text={this.state.text} 
                        scss={this.state.scss} 
                        tag={this.state.tag}
                        containerTag={this.state.container}
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