import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    background: rgba(255, 255, 255, 0.12);
    margin-bottom: 3px;
`

const Title = styled.div`
    cursor: pointer;
    padding: 1px 5px;

    &:hover {
        font-weight: bold;
    }
`

const Content = styled.div`
    background: #303030;
    padding: 3px 0;
`



class Expander extends Component {
    state = { 
        open: false
     }

    ToggleOpen = () => {this.setState({open: !this.state.open})}

    render() { 
        const Notch = styled.div`
            float: right;
            ${this.state.open ? "transform: rotate(90deg) translateY(-1rem) translateX(.3rem);"
            : "transform: rotate(0deg) translateY(-.7rem);"}
            margin-left: 5px;
            font-size: 1.6rem;
            height: .6rem;
        `
        return ( 
            <Wrapper>
                <Title onClick={this.ToggleOpen}>
                    <Notch>&#8250;</Notch>
                    {this.props.title}
                </Title>
                
                {this.state.open && <Content>{this.props.children}</Content>}
            </Wrapper>
         );
    }
}
 
export default Expander;