import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Components/Cyberpunk/Card';
import Header from '../Components/Cyberpunk/Header';

// import Natours from '../imgs/Natours.png';
import QuiRe from '../imgs/QuiRe.svg';
import TeamTrack from '../imgs/TeamTrack.svg';
import Ryukbot from '../imgs/Ryukbot.png';
import Maven from '../imgs/Maven.png';

import REACT from '../imgs/React.png';
import Redux from '../imgs/redux.svg';
import Node from '../imgs/nodejs.svg';
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
// let colorSecondary = "#e100f5"

const Wrapper = styled.div`
    background: black;
    position: relative;
`

const Container = styled.div`
    height 100%;
    padding: 8rem 0;
    position: relative;
    z-index: 1;
    background: ${colorBg2};
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

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    width: 100%;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
`

class Art extends Component {
    render() { 
        return ( 
            <Wrapper>
                <Container>
                    <Header>Art</Header>
                    <Cards>
                        <Card title="Ryukbot" logo={Ryukbot} 
                            github="https://github.com/Mark-Prime/Ryukbotv2"
                            tagline="Source Engine video clip recording, automated."
                            builtWith={[
                                {name: "Python", logo: Python},
                            ]}/>
                        <Card title="TeamTrack" logo={TeamTrack}
                            github="https://github.com/Mark-Prime/Team-Track"
                            tagline="eSports statistics categorized and visualized."
                            website='https://www.teamtrack.xyz/#/home'
                            builtWith={[
                                {name: "REACT.js", logo: REACT},
                                {name: "Redux", logo: Redux},
                                {name: "node.js", logo: Node},
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
                        <Card title="CSS Builder" logo={Maven}
                            github="https://github.com/Mark-Prime/css-creator"
                            tagline='Powerful CSS writing tool with no CSS knowledge required.'
                            website="https://markspannbauer.me/css"
                            builtWith={[
                                {name: "REACT.js", logo: REACT},
                                {name: "Redux", logo: Redux},
                                {name: "Styled Components", logo: StyledComponents},
                            ]} />
                    </Cards>
                </Container>
            </Wrapper>
         );
    }
}
 
export default Art;