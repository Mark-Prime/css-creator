import React, { Component } from 'react';
import styled from 'styled-components'

const Content = styled.div`
    padding: 0;
    overflow: hidden;

    transition: min-height .1s, max-height .1s, opacity .1s;

    min-height: 0px;
    max-height: 0px;
    border-left: none;
    opacity: 0;
`

const Wrapper = styled.div`
    margin-bottom: 2px;
    height: auto;
    transition: all .05s;
`

const Title = styled.div`
    cursor: pointer;
    padding: 1px 1rem 3px;
    transition: all .1s;
    background: #383838;
    position: relative;
    font-weight: 300;

    &:before {
        content: '';
        height: 10px;
        width: 10px;
        display: inline-block;
        background: #ffffff;
        transition: all .1s;

        position: absolute;
        top: 50%;
        left: .2rem;
        transform: translateY(-50%);

        clip-path: polygon(60% 0, 100% 50%, 60% 100%, 30% 100%, 70% 50%, 30% 0);
    }
    
    &:hover {
        font-weight: 500;
        padding: 1px 1.4rem 3px;
        background: #404040;

        &:before {
            left: .4rem;
        }
    }
    
    &[open] {
        background: #444444;

        &:before {
            clip-path: polygon(100% 60%, 50% 100%, 0 60%, 0 30%, 50% 70%, 100% 30%);
        }

        & + ${Content} {
            opacity: 1;
            min-height: 10px;
            max-height: 600px;
            border-left: 2px solid #444444;
            border-bottom: 2px solid #444444;
        }
    }
`

class Expander extends Component {
    state = { 
        open: false
     }

    ToggleOpen = () => {this.setState({open: !this.state.open})}

    render() { 
        return ( 
            <Wrapper>
                <Title open={this.state.open} onClick={this.ToggleOpen}>
                    {this.props.title}
                </Title>
                <Content open={this.state.open}>{this.props.children}</Content>
            </Wrapper>
         );
    }
}
 
export default Expander;