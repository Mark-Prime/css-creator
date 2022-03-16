import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let Rewards = styled.div`
    color: lightgreen;
    border-top: 1px solid white;
    width: 100%;
    margin-top: .5rem;
`;

let Costs = styled.div`
    width: 100%;
    color: #f44336;
    border-top: 1px solid white;
    margin-top: .5rem;
`;
class GameButton extends Component {
    state = { 
        disabled: false,
    } 

    onClick = (delay = 1) => {
        if (this.props.checkCost(this.props.cost || {})) {
            this.setState({
                disabled: true,
            })
    
            let max = this.props.max || 5;
            let min = this.props.min || 1;
    
            wait(delay*1000).then(() => {
                this.props.addValue((Math.floor(Math.random() * (max - min + 1)) + min) * this.props.multiplier, this.props.title);
                this.setState({
                    disabled: false,
                })
            })
        }   
    }

    enableTooltip = () => {
        this.setState({
            showTooltip: true,
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.disabled !== nextState.disabled;
    }

    render() { 

        const disabledAnimation = keyframes`
            0% { width: 100%; }
            100% { width: 0%; }
        `

        let Wrapper = styled.div`
            position: relative;
        `

        let ToolTip = styled.div`
            position: absolute;
            z-index: 10;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            opacity: 0;
            display: none;

            border: 1px solid white;
            padding: 5px;

            background: #121212;
            color: white;
            font-size: .8rem;
        `

        let Button = styled.button`
            width: 150px;
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
            margin: 5px;

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

            &:hover + ${ToolTip} {
                opacity: 1;
                display: block;
            }
        `

        return (
            <Wrapper>
                <Button 
                    disabled={this.state.disabled} 
                    onMouseDown={() => this.onClick(this.props.delay)}
                >
                    {this.props.text}
                </Button>
                <ToolTip>
                    {this.props.toolTipText}
                    <Rewards>Rewards: </Rewards>
                    <div>
                        {(this.props.min || 1) * this.props.multiplier}-{(this.props.max || 5) * this.props.multiplier} {this.props.title.split('-')[0]}
                    </div>
                    {(Object.keys(this.props.cost).length > 0) && <>
                        <Costs>Costs: </Costs>
                        {Object.keys(this.props.cost).map((key, index) => {
                            return (
                                <div key={`${key}_${index}`}>
                                    {this.props.cost[key]} {key}
                                </div>
                            )
                        })}
                    </>}
                    
                </ToolTip>
            </Wrapper>
        );
    }
}
 
export default GameButton;