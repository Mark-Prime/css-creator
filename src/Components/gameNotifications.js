import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

let Wrapper = styled.div`
    height: calc(100% - 4rem);
    width: 20vw;
    color: white;
    mask: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%);
    padding: 1rem;
    margin: 1rem;
    font-size: .8rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

const loadAnimation = keyframes`
    from { transform: translateY(-1.4rem); }
    to { transform: translateY(0rem); }
`

let Notification = styled.div`
    margin: 0.7rem 0;
    animation: ${loadAnimation} .3s ease-in-out 0s 1 forwards;
`;

let Priority = styled.div`
    margin: 0.7rem 0;
    color: gold;
    animation: ${loadAnimation} .3s ease-in-out 0s 1 forwards;
`;

let Resources = styled.div`
    margin: 0.7rem 0;
    color: lightgreen;
    animation: ${loadAnimation} .3s ease-in-out 0s 1 forwards;
`;

let Danger = styled.div`
    margin: 0.7rem 0;
    color: #f44336;
    animation: ${loadAnimation} .3s ease-in-out 0s 1 forwards;
`;

class Notifications extends Component {
    render() { 
        return (
            <Wrapper>{
                    this.props.notifications.map((notification, index) => {
                        if (index < 20) {
                            switch (notification.type) {
                                case 'priority':
                                    return (
                                        <Priority key={`${index}_${notification.text}`} id={`${index}_${notification.text}`}>
                                            {notification.text}
                                        </Priority>
                                    )
                                case 'resources':
                                    return (
                                        <Resources key={`${index}_${notification.text}`} id={`${index}_${notification.text}`}>
                                            {notification.text}
                                        </Resources>
                                    )
                                case 'danger':
                                    return (
                                        <Danger key={`${index}_${notification.text}`} id={`${index}_${notification.text}`}>
                                            {notification.text}
                                        </Danger>
                                    )
                                default:
                                    return (
                                        <Notification key={`${index}_${notification.text}`} id={`${index}_${notification.text}`}>
                                            {notification.text}
                                        </Notification>
                                    )
                            }
                        } else {return null}
                    })
                }</Wrapper>
        );
    }
}
 
export default Notifications;