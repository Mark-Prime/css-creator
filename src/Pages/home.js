import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CodingBackground from '../imgs/coding-mid.jpg'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
`

const Header = styled.div`
    font-family: Montserrat, sans-serif;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2)), url(${CodingBackground});
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 90vh;
`

const animation = keyframes`
    0% {
        transform: translateY(-120px);
    }

    10% {
        transform: translateY(-120px);
    }

    30% {
        transform: translateY(-300px);
    }

    40% {
        transform: translateY(-300px);
    }

    60% {
        transform: translateY(0);
    }

    70% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(calc(-100% + 3.7rem));
    }
`

const Descriptor = styled.div`
    font-family: Inter, sans-serif;
    color: white;
    font-size: 3rem;
    text-align: left;
    position: absolute;
    left: 50%;
    height: fit-content;
    transform: translateY(calc(-100% + 3.7rem));
    animation: ${animation} 2.5s ease;
    padding: 0;
    margin: 0;
`

const IAM = styled.div`
    position: absolute;
    right: 51%;
`

const SubHeader = styled.div`
    position: relative;
    text-align: center;
    transition: all 0.1s ease-out;
    cursor: default;
    font-family: Inter, sans-serif;
    padding-top: 10vh;
    overflow: hidden;
    color: white;
    font-size: 3rem;
    height: 20vh;
    width: 100%;
    mask: linear-gradient(0deg, rgba(255,255,255,0) 10%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 55%, rgba(255,255,255,0) 90%);
`

const NamePlate = styled.div`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    padding-top: 10vh;
    font-weight: 700;
`

const descriptors = ['a software engineer', 'a movie lover', 'a front-end developer', 'a video editor', 'a photographer', 'an artist', 'a gamer'];


class Home extends Component {
    state = { index: 0 }

    render() { 
        return ( 
            <Container>
                <Header>
                    <NamePlate>Mark Spannbauer</NamePlate>
                    <SubHeader><IAM>I AM </IAM><Descriptor>{descriptors.map((descriptor) => (<>{descriptor}<br/></>))}<br/><br/>ME</Descriptor></SubHeader>
                </Header>
            </Container>
         );
    }
}
 
export default Home;