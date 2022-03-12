import React, { Component } from 'react';
import styled from 'styled-components';
import GameButton from '../Components/gameButton';
import GameNotifications from '../Components/gameNotifications';

let Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    position: relative;
`

let MainBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 75%;
`;

class Game extends Component {
    state = { 
        points: 0,
        multiplier: 1,
        notifications: [
            {text: 'Welcome to the game!', type: 'info'},
        ],
     } 

    addValue = (perClick, resource = "resource(s)") => {
        let newNotification = {text: `+${perClick} ${resource}`, type: 'resources'};

        if (this.state.notifications[0].text === newNotification.text) {
            perClick += 1;
            newNotification = {text: `+${perClick} ${resource}`, type: 'resources'};
        }

        let notifications = [newNotification, ...this.state.notifications];
        notifications = notifications.slice(0, 20);

        this.setState({
            points: this.state.points + perClick,
            notifications: notifications
        })
    }

    render() { 
        return (
            <Body>
                <GameNotifications notifications={this.state.notifications}/>
                <MainBody>
                    <GameButton value={this.state.points} multiplier={this.state.multiplier} addValue={this.addValue}/>
                </MainBody>
            </Body>
        );
    }
}
 
export default Game;