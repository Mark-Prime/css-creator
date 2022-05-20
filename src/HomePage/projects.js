import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Components/Cyberpunk/Card';

// import Natours from '../imgs/Natours.png';
import QuiRe from '../imgs/QuiRe.svg';
import TeamTrack from '../imgs/TeamTrack.svg';
import Ryukbot from '../imgs/Ryukbot.png';
import Maven from '../imgs/Maven.png';

import REACT from '../imgs/React.png';
import Redux from '../imgs/redux.svg';
import Node from '../imgs/nodejs.svg';
import HTML5 from '../imgs/HTML5.png';
import CSS3 from '../imgs/css3.png';
// import Sass from '../imgs/sass-1.svg';
import Chrome from '../imgs/chrome.svg';
import Python from '../imgs/python.svg';
import StyledComponents from '../imgs/styledcomponents.png';

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
                        <Card title="Ryukbot" logo={Ryukbot} 
                            github="https://github.com/Mark-Prime/Ryukbotv2"
                            builtWith={[
                                {name: "Python", logo: Python},
                            ]}/>
                        <Card title="TeamTrack" logo={TeamTrack}
                            github="https://github.com/Mark-Prime/Team-Track"
                            website='https://www.teamtrack.xyz/#/home'
                            builtWith={[
                                {name: "REACT.js", logo: REACT},
                                {name: "Redux", logo: Redux},
                                {name: "node.js", logo: Node},
                            ]} />
                        <Card title="QuiRe" logo={QuiRe}
                            github="https://github.com/Mark-Prime/QuiRe"
                            website="https://chrome.google.com/webstore/detail/quire/ilchbfooaopcoekdfnhlcohobeediilo"
                            builtWith={[
                                {name: "CSS3", logo: CSS3},
                                {name: "HTML5", logo: HTML5},
                                {name: "Chrome", logo: Chrome},
                            ]} />
                        <Card title="CSS Builder" logo={Maven}
                            github="https://github.com/Mark-Prime/css-creator"
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
 
export default Projects;