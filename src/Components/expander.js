import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'

const Open = keyframes`
    from {
        min-height: 0px;
        max-height: 0px;
        overflow-y: hidden;
    }

    to {
        min-height: 10px;
        max-height: 600px;
        overflow-y: hidden;
    }
`

const Content = styled.div`
    background: #303030;
    padding: 3px 0;
    overflow-x: hidden;
    overflow-y: auto;

    min-height: 10px;
    max-height: 600px;

    animation: ${Open} .2s linear 0s 1 normal;
`

const Title = styled.div`
    cursor: pointer;
    padding: 1px 5px;
    transition: all .1s;

    &:hover {
        font-weight: bold;
        margin-left: 5px;
    }
`

class Expander extends Component {
    state = { 
        open: false
     }

    ToggleOpen = () => {this.setState({open: !this.state.open})}

    render() { 
        const Wrapper = styled.div`
            background: rgba(255,255,255, .12);
            margin-bottom: 3px;
            border-radius: 5px 0 0 ${this.state.open ? "0" : "5px"};
            height: auto;
            transition: all .05s;

            &:hover {
                border-radius: 0px;
            }
        `

        const Notch = styled.div`
            float: left;
            transform: rotate(0deg) translateY(-.7rem);
            margin-right: 10px;
            font-size: 1.6rem;
            height: .6rem;
            transition: all .1s;

            &[open] {
                transform: rotate(90deg) translateY(-1rem) translateX(.3rem);
            }
        `
        return ( 
            <Wrapper>
                <Title onClick={this.ToggleOpen}>
                    <Notch open={this.state.open}>&#8250;</Notch>
                    {this.props.title}
                </Title>
                
                {this.state.open && <Content>{this.props.children}</Content>}
            </Wrapper>
         );
    }
}
 
export default Expander;