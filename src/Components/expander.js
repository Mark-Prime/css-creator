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

const Title = styled.div`
    cursor: pointer;
    padding: 1px 1.8rem;
    transition: all .1s;
    border-radius: 5px 0 0 5px;
    background: #444444;
    position: relative;

    &:before {
        content: '';
        height: 10px;
        width: 10px;
        display: inline-block;
        background: #ffffff;
        transition: all .1s;

        position: absolute;
        top: 50%;
        left: .5rem;
        transform: translateY(-50%);

        clip-path: polygon(60% 0, 100% 50%, 60% 100%, 30% 100%, 70% 50%, 30% 0);
    }
    
    &[open] {
        border-radius: 5px 0 0 0;

        &:before {
            clip-path: polygon(100% 60%, 50% 100%, 0 60%, 0 30%, 50% 70%, 100% 30%);
        }
    }

    &:hover {
        font-weight: bold;
        border-radius: 0px;
        padding: 1px 2rem;

        &:before {
            left: .7rem;
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