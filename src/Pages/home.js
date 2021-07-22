import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../imgs/logo.png';

// colors:
let colorBg = "#21006f"
// let colorBg2 = "#450eff"
// let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
// let colorSecondary = "#e100f5"

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Header = styled.div`
    font-family: Montserrat, sans-serif;
    background: linear-gradient(black, ${colorBg});
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

let lineheight = -60

const animation = keyframes`
    0% {
        transform: translateY(${lineheight*2}px);
    }

    20% {
        transform: translateY(${lineheight*2}px);
    }

    40% {
        transform: translateY(${lineheight*5}px);
    }

    50% {
        transform: translateY(${lineheight*5}px);
    }

    70% {
        transform: translateY(${lineheight}px);
    }

    80% {
        transform: translateY(${lineheight}px);
    }

    100% {
        transform: translateY(calc(-100% + 60px));
    }
`

const IAM = styled.div`
    position: absolute;
    right: 50%;
    color: ${colorPrimary};
    text-shadow: 0 0 3px ${colorPrimary};
`

const NamePlate = styled.img`
    margin: auto;
    height: 200px;
`

const DownArrow = styled.div`
    height: 75px;
    width: 50px;
    background: black;
`

const descriptors = ['a movie lover', 'a software engineer', 'an artist', 'a front-end developer', 'a photographer', 'a video editor', 'a gamer', 'a performer', 'a leader', 'a python developer', 'a magician'];

class Home extends Component {
    state = { 
        num: 0,
        laoded: false,
        style: {}
     }

    componentDidMount() {
        setTimeout(() => {
                this.setState({ loaded: true,})
        }, 2500);
    }

    randInt = (max) => {
        let num = Math.floor(Math.random() * max);
        if (num !== this.state.num) {
            this.setState({ num: num });
            return num
        } else {
            return this.randInt(max);
        }
    }


    onMouseEnter = () => {
        if (this.state.loaded) {
            this.randInt(descriptors.length-1)
        }
    }

    render() { 

        const Descriptor = styled.div`
            font-family: Inter, sans-serif;
            font-size: 3rem;
            text-align: left;
            position: absolute;
            left: 51%;
            height: fit-content;
            transform: translateY(calc(-100% + 60px));
            animation: ${animation} ${this.state.loaded ? '0s' : '2.5s'} ease;
            color: ${colorPrimary};
            text-shadow: 0 0 3px ${colorPrimary};
            transition: transform 0.2s ease;
        `

        const SubHeader = styled.div`
            position: relative;
            top: -200px;
            text-align: center;
            transition: all 0.1s ease-out;
            cursor: default;
            font-family: Inter, sans-serif;
            color: white;
            font-size: 3rem;
            padding-top: 50px;
            height: 100px;
            width: 90%;
            margin: auto;
            mask: linear-gradient(0deg, rgba(255,255,255,0) 10%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 55%, rgba(255,255,255,0) 90%);
            overflow: hidden;

            &:hover ${Descriptor} {
                transform: translateY(${lineheight * this.state.num}px);
            }
        `
        return ( 
            <Container>
                <Header>
                    <NamePlate src={logo} alt="Mark Spannbauer" />
                    <SubHeader onMouseEnter={this.onMouseEnter}><IAM>I AM </IAM><Descriptor key={this.state.num}>{descriptors.map((descriptor) => (<div key={descriptor}>{descriptor}<br/></div>))}<br/><br/>ME</Descriptor></SubHeader>
                    <DownArrow>V</DownArrow>
                </Header>
            </Container>
         );
    }
}
 
export default Home;