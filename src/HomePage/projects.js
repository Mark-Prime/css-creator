import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Components/Cyberpunk/Card';
import Header from '../Components/Cyberpunk/Header';

import Natours from '../imgs/Natours.png';
import QuiRe from '../imgs/QuiRe.svg';
import TeamTrack from '../imgs/TeamTrack.svg';
import Ryukbot from '../imgs/Ryukbot.png';
import Maven from '../imgs/Maven.png';
import imgElution from '../imgs/imgelution.png';

import REACT from '../imgs/React.png';
import Redux from '../imgs/redux.svg';
import Node from '../imgs/nodejs.svg';
import Rust from '../imgs/rust.png';
// import HTML5 from '../imgs/HTML5.png';
import CSS3 from '../imgs/css3.png';
import JavaScript from '../imgs/javascript.svg';
// import Sass from '../imgs/sass-1.svg';
import Chrome from '../imgs/chrome.svg';
import Python from '../imgs/python.svg';
import StyledComponents from '../imgs/styledcomponents.png';

// * colors:
// let colorBg = "#21006f"
let colorBg2 = "#450eff"
// let colorHighlight = "#ff911a"
// let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Wrapper = styled.div`
    background: black;
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
            ellipse at 5% 87%,
            ${colorBg2} 0%,
            transparent 50%),
            radial-gradient(
                ellipse at 95% 95%,
                ${colorBg2} 0%,
                transparent 30%);
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

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-gap: 2rem;
    width: 60%;
    padding: 1rem;
    max-width: 1600px;
    margin: 0 auto;

    @media (max-width: 1300px) {
        width: 80%;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
    }
`

class Projects extends Component {
    render() { 
        return ( 
            <Wrapper>
                <Container>
                    <Header>projects</Header>
                    <Cards>
                        <Card title="Img-elution" logo={imgElution}
                            github="https://github.com/Mark-Prime/img-elution"
                            tagline='Recreating source images using random lines and evolution.'
                            builtWith={[
                                {name: "Rust", logo: Rust},
                            ]} />
                        <Card title="CSSimple" logo={Maven}
                            github="https://github.com/Mark-Prime/css-creator"
                            tagline='Powerful CSS writing tool with no CSS knowledge required.'
                            website="https://markspannbauer.me/cssimple"
                            builtWith={[
                                {name: "REACT.js", logo: REACT},
                                {name: "Redux", logo: Redux},
                                {name: "Styled Components", logo: StyledComponents},
                            ]} />
                        <Card title="QuiRe" logo={QuiRe}
                            github="https://github.com/Mark-Prime/QuiRe"
                            tagline="Browser extension for quick and easy access to common replies."
                            website="https://chrome.google.com/webstore/detail/quire/ilchbfooaopcoekdfnhlcohobeediilo"
                            builtWith={[
                                {name: "CSS3", logo: CSS3},
                                {name: "JavaScript", logo: JavaScript},
                                {name: "Chrome", logo: Chrome},
                            ]} />
                        <Card title="TeamTrack" logo={TeamTrack}
                            github="https://github.com/Mark-Prime/Team-Track"
                            tagline="eSports statistics categorized and visualized."
                            website='https://www.teamtrack.xyz/#/home'
                            builtWith={[
                                {name: "REACT.js", logo: REACT},
                                {name: "Redux", logo: Redux},
                                {name: "node.js", logo: Node},
                            ]} />
                        <Card title="Ryukbot" logo={Ryukbot} 
                            github="https://github.com/Mark-Prime/Ryukbotv2"
                            tagline="Source Engine video clip recording, automated."
                            builtWith={[
                                {name: "Python", logo: Python},
                            ]}/>
                        <Card title="Natours" logo={Natours}
                            github="https://github.com/Mark-Prime/Natours"
                            tagline="Beautiful and sleek Nature themed web page design."
                            website="https://mark-prime.github.io/Natours/"
                            builtWith={[
                                {name: "CSS3", logo: CSS3},
                            ]} />
                    </Cards>
                </Container>
            </Wrapper>
         );
    }
}
 
export default Projects;