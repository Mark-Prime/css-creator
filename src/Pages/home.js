import React, { Component } from 'react';
import styled from 'styled-components';
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

const Adjective = styled.div`
    font-family: Inter, sans-serif;
    color: white;
    font-size: 3rem;
    display: inline-block;

    &::before {
        content: 'I AM ';
    }
`

const SubHeader = styled.div`
    text-align: center;
    transition: all 0.1s ease-out;
    cursor: default;

    &:hover {
        font-weight: 700;
        transform: scale(1.1) translateY(-10px);
        text-shadow: 0 10px 5px #000;
    }
`

const NamePlate = styled.div`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    padding-top: 10vh;
    margin-bottom: 10vh;
    font-weight: 700;
`

const adjectives = ['a software engineer', 'a photographer', 'a video editor', 'a front-end developer', 'an artist', 'a gamer', 'ME'];

class Home extends Component {
    render() { 
        return ( 
            <Container>
                <Header>
                    <NamePlate>Mark Spannbauer</NamePlate>

                    <SubHeader><Adjective>ME</Adjective></SubHeader>
                </Header>
            </Container>
         );
    }
}
 
export default Home;