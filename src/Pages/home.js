import React, { Component } from 'react';
import styled from 'styled-components';

import Splash from '../HomePage/splashScreen';
import Projects from '../HomePage/projects';
import AboutMe from '../HomePage/aboutMe';
import Contact from '../HomePage/contact';

// * colors:
// let colorBg = "#21006f"
// let colorBg2 = "#450eff"
// let colorHighlight = "#ff911a"
// let colorPrimary = "#fe3218"
// let colorSecondary = "#e100f5"

const Container = styled.div`
    box-sizing: border-box;
`

class Home extends Component {
    render() { 
        return ( 
            <Container>
                <Splash />
                <AboutMe />
                <Projects />
                <Contact />
            </Container>
         );
    }
}
 
export default Home;