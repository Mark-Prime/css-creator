import React, { Component } from 'react';
import styled from 'styled-components'

const Content = styled.div`
    padding: 0;
    overflow: hidden;

    transition: all .2s;

    min-height: ${props=>props.open ? '10px' : '0px'};
    max-height: ${props=>props.open ? '600px' : '0px'};
`

const Wrapper = styled.div`
    margin-bottom: 3px;
    height: auto;
    transition: all .05s;
`

class Expander extends Component {
    state = { 
        open: false
     }

    ToggleOpen = () => {this.setState({open: !this.state.open})}

    render() { 
        const Title = styled.div`
            cursor: pointer;
            padding: 1px 5px;
            transition: all .1s;
            border-radius: 5px 0 0 ${this.state.open ? "0" : "5px"};
            background: #444444;

            &:hover {
                font-weight: bold;
                padding-left: 10px;
                border-radius: 0px;
            }
        `

        const Notch = styled.div`
            float: left;
            transform: rotate(0deg) translateY(-.5rem);
            margin-right: 10px;
            font-size: 1.6rem;
            height: .6rem;
            transition: all .1s;

            &[open] {
                transform: rotate(90deg) translate(.3rem, -1rem);
            }
        `
        return ( 
            <Wrapper>
                <Title onClick={this.ToggleOpen}>
                    <Notch open={this.state.open}>&#8250;</Notch>
                    {this.props.title}
                </Title>
                
                <Content open={this.state.open}>{this.props.children}</Content>
            </Wrapper>
         );
    }
}
 
export default Expander;