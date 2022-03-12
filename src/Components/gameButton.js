import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

class GameButton extends Component {
    state = { 
        disabled: false,
    } 

    onClick = (delay = 1) => {
        this.setState({
            disabled: true,
        })

        wait(delay*1000).then(() => {
            this.props.addValue((Math.floor(Math.random() * (5)) + 1) * this.props.multiplier)
            this.setState({
                disabled: false,
            })
        })
    }

    render() { 

        const disabledAnimation = keyframes`
            0% { width: 100%; }
            100% { width: 0%; }
        `

        let Button = styled.button`
            background: transparent;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: 10px;
            border-bottom: 5px solid white;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
            color: white;
            transition: all 0.05s linear;
            position: relative;
            cursor: pointer;
            overflow: hidden;

            &:disabled {
                border-bottom: 3px solid white;
                transform: translateY(2px);

                &:after {
                    content: "";
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: -1;
                    background: darkgray;
                
                    transition: all .4s linear;

                    animation: ${disabledAnimation} ${this.props.delay || 1}s ease 0s 1 forwards;
                }
            }
        `

        return (
            <Button disabled={this.state.disabled} onMouseDown={() => this.onClick(this.props.delay)}>Points: {this.props.value}</Button>
        );
    }
}
 
export default GameButton;