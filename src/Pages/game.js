import React, { Component } from 'react';
import styled from 'styled-components';
import GameButton from '../Components/gameButton';
import GameNotifications from '../Components/gameNotifications';
import buildNotification from '../Utility/buildNotification';

let Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    margin: 0 auto;
`

let MainBody = styled.div`
    position: relative;
    display: grid;
    
`;

class Game extends Component {
    state = { 
        wood: 0,
        food: 4,
        tools: 0,
        multiplier: 1,
        notifications: [
            {text: 'Welcome to the game!', type: 'info'},
        ],
        currentStage: 0,
        stages: [
            {
                food: {
                    required: 0,
                    type: 'equals'
                },
            },
            {
                wood: {
                    required: 50,
                    type: 'greaterthan'
                },
            },
        ]
     } 

    checkStage = (newState) => {
        let count = 0;
        let stage = newState.stages[newState.currentStage];

        if (stage === undefined) {
            return newState;
        }

        let requiredCount = Object.keys(stage).length;

        for (let item in stage) {
            let itemObj = stage[item];
            switch (itemObj.type) {
                case 'equals':
                    if (newState[item] === itemObj.required) {
                        count = count + 1;
                    }
                    break;
                case 'greaterthan':
                    if (newState[item] > itemObj.required) {
                        count = count + 1;
                    }
                    break;
                default:
                    break;
            }
        }

        if (count === requiredCount) {
            newState.currentStage = newState.currentStage + 1;
        }

    }

    addValue = (perClick, resource = "wood") => {
        let baseResource = resource.split('-')[0];
        let newNotification = {text: buildNotification(perClick, resource, this.state[baseResource]), type: 'resources'};

        let notifications = [newNotification, ...this.state.notifications];
        notifications = notifications.slice(0, 20);

        let newState = this.state
        newState[baseResource] += perClick;

        newState.notifications = notifications;

        this.setState(newState);
    }

    checkCost = (cost) => {
        let hasEnough = true;
        let newState = this.state;

        for (let resource in cost) {
            if (this.state[resource] < cost[resource]) {
                hasEnough = false;

                let newNotification = {text: `You don't have enough ${resource}.`, type: 'danger'};
                if (newState.notifications[0].text !== newNotification.text) {
                    let notifications = [newNotification, ...this.state.notifications];
                    notifications = notifications.slice(0, 20);
                    newState.notifications = notifications;
                }
            }
        }

        if (hasEnough) {
            for (let resource in cost) {
                newState[resource] -= cost[resource];
                if (newState[resource] === 0) {
                    let newNotification = {text: `You are out of ${resource}, gather more as soon as you can.`, type: 'priority'};
                    let notifications = [newNotification, ...this.state.notifications];
                    notifications = notifications.slice(0, 20);
                    newState.notifications = notifications;
                }
            }
        }

        newState = this.checkStage(newState);

        this.setState(newState);
        return hasEnough;
    }

    render() { 
        return (
            <Body>
                <GameNotifications notifications={this.state.notifications}/>
                <MainBody>
                    <GameButton
                        delay={3}
                        multiplier={this.state.multiplier}
                        addValue={this.addValue}
                        text="Gather Wood"
                        title="wood"
                        checkCost={this.checkCost}
                        cost={{
                            food: 1,
                        }}
                        toolTipText="Gather wood from the forest."
                    />
                    {this.state.currentStage >= 1 && <GameButton
                        delay={4}
                        multiplier={this.state.multiplier}
                        addValue={this.addValue}
                        text="Gather Berries"
                        title="food-berries"
                        checkCost={this.checkCost}
                        max={3}
                        cost={{}}
                        toolTipText="Gather berries from nearby bushes."
                    />}
                    {this.state.currentStage >= 2 && <GameButton
                        delay={10}
                        multiplier={this.state.multiplier}
                        addValue={this.addValue}
                        text="Construct Tools"
                        title="tools-construct"
                        checkCost={this.checkCost}
                        max={3}
                        cost={{
                            wood: 10,
                            food: 5,
                        }}
                        toolTipText="Construct tools to make other tasks faster."
                    />}
                </MainBody>
            </Body>
        );
    }
}
 
export default Game;