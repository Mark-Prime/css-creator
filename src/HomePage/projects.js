import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Components/Cyberpunk/Card';

// * colors:
let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Wrapper = styled.div`
    height: 100vh;
    background: linear-gradient(${colorBg} -30%, ${colorBg2} 10%);
    position: relative;
`

const Container = styled.div`
    height 100%;
    padding-top: 8rem;
    position: relative;
    z-index: 1;
    background: ${colorSecondary};
    clip-path: polygon(
        100% 0,
        100% 100%,
        0 100%,
        0 5rem
        );

    overflow: hidden;

    &::after {
        content: "";
        background: black;
        position: absolute;
        z-index: -1;
        top: 1rem;
        left: 0;
        width: 100%;
        height: 100%;

        clip-path: polygon(
            100% 0,
            100% 100%,
            0 100%,
            0 5rem
            );
    }
`

const Header = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: ${colorHighlight};
    transition: all .3s;
    position: relative;
    z-index: 1;
    margin-bottom: 2rem;
    
    // text-shadow: 0 0 0 ${colorPrimary}, 0 0 0 ${colorSecondary};

    // &:hover{
    //     text-shadow: 4px 4px 0 ${colorPrimary}, 8px 8px 0 ${colorSecondary};
    // }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    width: 100%;
    height: 25rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
`

class Projects extends Component {
    render() { 
        return ( 
            <Wrapper>
                <Container>
                    <Header>Projects</Header>
                    <Cards>
                        <Card title="Ryukbot" logo=""></Card>
                        <Card title="TeamTrack" logo=""></Card>
                        <Card title="Natours" logo=""></Card>
                        <Card title="CSS Builder" logo=""></Card>
                    </Cards>
                </Container>
            </Wrapper>
         );
    }
}
 
export default Projects;