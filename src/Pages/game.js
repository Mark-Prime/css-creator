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
        ]
     } 

    checkStage = (newState) => {
        for (let item in newState.stages[newState.currentStage]) {
            console.log(item)
            switch (newState.stages[newState.currentStage][item].type) {
                case 'equals':
                    if (newState.stages[newState.currentStage][item].required === newState[item]) {
                        newState.currentStage = newState.currentStage + 1;
                    }
                    break;
                default:
                    break;
            }
        }
        return newState;
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
            } else {
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
                    
                </MainBody>
            </Body>
        );
    }
}
 
export default Game;