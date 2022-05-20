import React, { Component } from 'react';
import styled from 'styled-components';

import Splash from '../HomePage/splashScreen';
import Projects from '../HomePage/projects';
// import Art from '../HomePage/art';

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
    state = {
        activePage: "home",
    }

    render() { 
        return ( 
            <Container>
                <Splash />
                <Projects />
                {/* <Art /> */}
            </Container>
         );
    }
}
 
export default Home;