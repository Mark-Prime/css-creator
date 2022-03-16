import React, { Component } from 'react';
import styled from 'styled-components';

import Splash from '../HomePage/splashScreen';
import Projects from '../HomePage/projects';

// * colors:
// let colorBg = "#21006f"
// let colorBg2 = "#450eff"
// let colorHighlight = "#ff911a"
// let colorPrimary = "#fe3218"
// let colorSecondary = "#e100f5"

const Container = styled.div``

class Home extends Component {
    state = {
        activePage: "home",
        pages: ["home", "projects", "art", "skills"],
        pageIndex: 0
    }

    

    render() { 
        return ( 
            <Container>
                {(() => {
                    switch (this.state.activePage) {
                    case 'home':
                        return <>
                                <Splash active={true}/>
                                <Projects active={false}/>
                            </>
                    case 'projects':
                        return <>
                                <Splash active={false}/>
                                <Projects active={true}/>
                            </>
                    default:
                        return null
                    }
                })()}
                
            </Container>
         );
    }
}
 
export default Home;