import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Cyberpunk/Header';
import Me from '../imgs/me.jpg';

// * colors:
let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Wrapper = styled.div`
    background: linear-gradient(${colorBg} -30%, ${colorBg2} 10%);
    position: relative;
`

const Container = styled.div`
    height 100%;
    padding: 8rem 0;
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
        // background: black;
        background-color: black;
        background-image: radial-gradient(
            ellipse at 93% 5%,
            ${colorBg} 0%,
            transparent 60%);
        background-repeat: no-repeat;
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

const About = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    width: 100%;
    padding: 1rem;
    max-width: 1600px;
    margin: 0 auto;
`

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: calc(100% - 2px);
    position: absolute;
    top: 1px;
    left: 1px;
`

const ImgContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`

const ImgEffects = styled.div`
    filter: drop-shadow(0 0 3px ${colorPrimary});
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`

const ImgGlow = styled.div`
    // border: 1px solid ${colorPrimary};
    width: 100%;
    height: 100%;
    z-index: 1;

    clip-path: polygon(50% -50%, 150% -50%, 50% 150%, -50% 150%);

    &::after {
        content: '';
        border: 1px solid ${colorPrimary};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`

const Name = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: ${colorHighlight};
    text-shadow: 0px 0px 5px ${colorHighlight};
    font-family: 'Major Mono Display', sans-serif;
    font-weight: 100;
    margin: 1rem 0;
`

const Links = styled.div`

`

const Link = styled.a`
    color: ${colorHighlight};
    margin: 1rem;

    & > * {
        display: inline-block;
        font: normal normal normal 2rem FontAwesome;
    } 
`

const Github = styled.i`
    &::before {
        content: "\f09b";
    }
`

const Linkedin = styled.i`
    &::before {
        content: "\f0e1";
    }
`

const Skills = styled.ul`
    list-style: none;
`

const Skill = styled.li`
    position: relative;
    z-index: 3;
    float: left;
    font-size: 1.2rem;
    color: ${colorHighlight};
    padding: 3px 1rem 5px .6rem;
    background: rgba(0,0,0,0.3);

    margin: .5rem;

    border: 1px solid ${colorPrimary};
    border-left: 5px solid ${colorPrimary};

    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 1rem),
        calc(100% - 1rem) 100%,
        0 100%
        );

    &::after {
        content: '';
        background: ${colorPrimary};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        clip-path: polygon(
            100% calc(100% - 1rem),
            calc(100% - 1rem) 100%,
            100% 100%
            );
    }
`

function AboutMe() {
    return ( 
        <Wrapper>
            <Container>
                <Header>about me</Header>
                <About>
                    <Bio>
                        <ImgContainer>
                            <ImgEffects>
                                <ImgGlow />
                            </ImgEffects>
                            <Img src={Me} alt="Mark (Maven) Spannbauer"/>
                        </ImgContainer>
                        <Name>maven (mark) spannbauer</Name>
                        <Links>
                            <Link href={"https://github.com/Mark-Prime"} target="_blank">
                                <Github aria-hidden={true}></Github>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/mark-spannbauer/"} target="_blank">
                                <Linkedin aria-hidden={true}></Linkedin>
                            </Link>
                        </Links>
                    </Bio>
                    <Skills>
                        <Name>skills</Name>
                        <Skill>JavaScript</Skill>
                        <Skill>Rust</Skill>
                        <Skill>Python</Skill>
                        <Skill>HTML</Skill>
                        <Skill>CSS</Skill>
                        <Skill>REACT.js</Skill>
                        <Skill>PostgreSQL</Skill>
                        <Skill>Node.js</Skill>
                        <Skill>Firebase</Skill>
                        <Skill>Bootstrap</Skill>
                        <Skill>Ant Design</Skill>
                        <Skill>Material-UI</Skill>
                        <Skill>jQuery</Skill>
                        <Skill>PowerShell</Skill>
                        <Skill>RBC</Skill>
                        <Skill>Leadership</Skill>
                        <Skill>Teaching</Skill>
                        <Skill>Public Speaking</Skill>
                        <Skill>Magic</Skill>
                    </Skills>
                </About>
            </Container>
        </Wrapper>
     );
}

export default AboutMe;