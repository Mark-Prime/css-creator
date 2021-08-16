import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../imgs/logo.png';
import HomeBG from '../imgs/home-bg.jpg';
import Noun from '../Components/Noun'

// colors:
let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const scanlineAnim = keyframes`
    0% {
        bottom: 90vh;
    }
    100% {
        bottom: -100px;
    }
`

const Scanner = styled.div`
    height: 95vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;

    &::before {    
        content: "";
        background-image: url(${HomeBG});
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.01;
        filter: grayscale(1);
    }
`

const Scanline = styled.div`
    clear: both;
    display: table;
    height: 100px;
    width: 100%;
    position: absolute;
    z-index: 1;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.03) 50%, rgba(255,255,255,0) 100%);
    animation: ${scanlineAnim} 10s linear infinite;
`

const Header = styled.div`
    font-family: "Major Mono Display", sans-serif;
    background: linear-gradient(#000000 0%, ${colorBg} 100%);
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

function createAnimation(lineheight) {
    return keyframes`
    0% {
        transform: translateY(calc((-${lineheight} * 2) - 3px));
    }

    20% {
        transform: translateY(calc((-${lineheight} * 2) - 3px));
    }

    40% {
        transform: translateY(calc((-${lineheight} * 5) - 3px));
    }

    50% {
        transform: translateY(calc((-${lineheight} * 5) - 3px));
    }

    70% {
        transform: translateY(calc(-${lineheight} - 3px));
    }

    80% {
        transform: translateY(calc(-${lineheight} - 3px));
    }

    100% {
        transform: translateY(calc(-100% + ${lineheight}));
    }
`
}

const purpleAnim = keyframes`
    0% {
        width: 100%;
        opacity: 0.1;

        &::after {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateY(-10px);
            box-shadow: 0px 20px 0px ${colorSecondary};
        }

        &::before {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateY(-22px);
            box-shadow: 0px 44px 0px ${colorSecondary};
        }
    }

    80% {
        width: 100%;
        opacity: 0.1;

        &::after {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateY(-10px);
            box-shadow: 0px 20px 0px ${colorSecondary};
        }

        &::before {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateY(-22px);
            box-shadow: 0px 44px 0px ${colorSecondary};
        }
    }
`

const IAM = styled.div`
    position: absolute;
    right: 49%;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(${colorPrimary}, ${colorHighlight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
        content: "I AM";
        position: absolute;
        width: fit-content;
        z-index: -1;
        transform: translateX(1px) translateY(1px);
        left: 0;
        background: linear-gradient(${colorBg2}, ${colorBg});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const NamePlate = styled.img`
    margin: 0 auto;
    position: relative;
    z-index: 1;
    max-height: 150px;
    max-width: 100vw;
`

const arrowAnim = keyframes`
    0% {
        clip-path: polygon(0% -40%, 50% -20%, 100% -40%, 100% -20%, 50% 0%, 0% -20%);
        background: ${colorPrimary};
    }

    100% {
        clip-path: polygon(0% 100%, 50% 120%, 100% 100%, 100% 120%, 50% 140%, 0% 120%);
        background: ${colorHighlight};
    }
`

const DownArrow = styled.div`
    height: 50px;
    width: 50px;
    position: relative;
    z-index: 1;
    mask: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,.9) 50%, rgba(255,255,255,0) 100%);

    &::before {
        content: "";
        clear: both;
        display: table;
        height: 50px;
        width: 50px;
        animation: ${arrowAnim} 1.5s linear infinite;
    }

    &::after {
        content: "";
        position: relative;
        top: -100%;
        clear: both;
        display: table;
        height: 50px;
        width: 50px;
        animation: ${arrowAnim} 1.5s linear infinite 0.75s;
    }

`

const ME = styled.div`
    background: -webkit-linear-gradient(${colorPrimary}, ${colorHighlight});
    font-family: "Montserrat", sans-serif;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;

    &::before {
        content: "ME";
        position: absolute;
        width: fit-content;
        z-index: -1;
        transform: translateX(1px) translateY(1px);
        left: 0;
        background: linear-gradient(${colorBg2}, ${colorBg});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
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
            font-family: "Major Mono Display", sans-serif;
            font-size: 3rem;
            text-align: left;
            position: absolute;
            left: calc(51% + 10px);
            height: fit-content;
            transform: translateY(calc(-100% + 3rem));
            animation: ${createAnimation('3rem')} ${this.state.loaded ? '0s' : '2.5s'} ease;
            transition: all 0.2s ease;
            white-space: nowrap;

            @media (max-width: 1550px) {
                font-size: 2.5rem;
                line-height: 2.5rem;
                transform: translateY(calc(-100% + 2.5rem));
                animation: ${createAnimation('2.5rem')} ${this.state.loaded ? '0s' : '2.5s'} ease;
            }

            @media (max-width: 1300px) {
                font-size: 2rem;
                line-height: 2rem;
                transform: translateY(calc(-100% + 2rem));
                animation: ${createAnimation('2rem')} ${this.state.loaded ? '0s' : '2.5s'} ease;
            }

            @media (max-width: 1000px) {
                font-size: 1.5rem;
                line-height: 1.5rem;
                transform: translateY(calc(-100% + 1.5rem));
                animation: ${createAnimation('1.5rem')} ${this.state.loaded ? '0s' : '2.5s'} ease;
            }

            @media (max-width: 750px) {
                font-size: 2rem;
                line-height: 2rem;
                transform: translateY(calc(-100% + 2rem));
                animation: ${createAnimation('2rem')} 0s ease;
            }
        `

        const PurpleLines = styled.div`
            position: absolute;
            z-index: -1;
            opacity: 0.3;
            width: 25%;
            height: 4px;
            top: 53%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 100%;
            background: ${colorSecondary};
            animation: ${purpleAnim} ${this.state.loaded ? '0s' : '2.5s'} ease;
            transition: all 0.2s ease-out;

            &::after {
                content: "";
                display: table;
                clear: both;

                position: absolute;
                opacity: 0.5;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) translateY(-5px);
                width: 90%;
                height: 2px;
                border-radius: 100%;
                background: ${colorSecondary};

                box-shadow: 0px 10px 0px ${colorSecondary};
            }

            &::before {
                content: "";
                display: table;
                clear: both;

                position: absolute;
                opacity: 0.5;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) translateY(-11px);
                width: 80%;
                height: 1px;
                border-radius: 100%;
                background: ${colorSecondary};

                box-shadow: 0px 22px 0px ${colorSecondary};
            }

            @media (max-width: 750px) {
                width: 50%;
                animation: ${purpleAnim} 0s ease;
            }
        `

        const SubHeader = styled.div`
            line-height: 3rem;
            position: relative;
            z-index: 10;
            top: -60px;
            text-align: center;
            cursor: default;
            font-family: Inter, sans-serif;
            color: white;
            font-size: 3rem;
            padding-top: 60px;
            height: 100px;
            width: 100%;
            margin: auto;
            mask: linear-gradient(0deg, rgba(255,255,255,0) 15%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 55%, rgba(255,255,255,0) 85%);
            overflow: hidden;

            @media (max-width: 1550px) {
                top: 60px;
                padding-top: 70px;
                font-size: 2.5rem;
                line-height: 2.5rem;
                transform: translateY(calc(-100% + 2.5rem));
            }

            @media (max-width: 1300px) {
                top: 60px;
                padding-top: 80px;
                font-size: 2rem;
                line-height: 2rem;
                transform: translateY(calc(-100% + 2rem));
            }

            @media (max-width: 1000px) {
                top: 60px;
                padding-top: 87px;
                font-size: 1.5rem;
                line-height: 1.5rem;
                transform: translateY(calc(-100% + 1.5rem));
            }

            @media (max-width: 750px) {
                top: 60px;
                padding-top: 80px;
                font-size: 2rem;
                line-height: 2rem;
                transform: translateY(calc(-100% + 2rem));
            }

            &:hover ${Descriptor} {
                transform: translateY(calc((-3rem * ${this.state.num}) - 3px));

                @media (max-width: 1550px) {
                    transform: translateY(calc((-2.5rem * ${this.state.num}) - 3px));
                }

                @media (max-width: 1300px) {
                    transform: translateY(calc((-2rem * ${this.state.num}) - 3px));
                }

                @media (max-width: 1000px) {
                    transform: translateY(calc((-1.5rem * ${this.state.num}) - 3px));
                }

                @media (max-width: 750px) {
                    transform: translateY(calc(-100% + 2rem));
                }
            }

            ${this.state.loaded && 
            `&:hover ${PurpleLines} {
                width: 100%;
                opacity: 0.1;

                &::after {
                    opacity: 0.9;
                    transform: translate(-50%, -50%) translateY(-10px);
                    box-shadow: 0px 20px 0px ${colorSecondary};
                }

                &::before {
                    opacity: 0.9;
                    transform: translate(-50%, -50%) translateY(-22px);
                    box-shadow: 0px 44px 0px ${colorSecondary};
                }
            }`}
            
        `
        return ( 
            <Container>
                <Header>
                    <NamePlate src={logo} alt="Mark Spannbauer" />
                    <SubHeader onMouseEnter={this.onMouseEnter} key={this.state.num}>
                        <IAM>I AM</IAM>
                        <Descriptor>
                            {descriptors.map(
                                (descriptor) => (
                                    <Noun 
                                        key={descriptor} 
                                        shadow={colorBg2}
                                        color={"#ff6a0e"}
                                    >{descriptor}<br/></Noun>
                                )
                            )}
                            <br/><br/><br/><br/><ME>ME</ME>
                        </Descriptor>
                        <PurpleLines />
                    </SubHeader>
                    <DownArrow />
                    <Scanner>
                        <Scanline />
                    </Scanner>
                </Header>
            </Container>
         );
    }
}
 
export default Home;