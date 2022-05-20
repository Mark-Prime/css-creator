import React from 'react';
import styled from 'styled-components';

// * colors:
// let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const Front = styled.div`
    background: black;
    border: 1px solid ${colorPrimary};
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 1rem;
    z-index: 2;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 5rem),
        calc(100% - 5rem) 100%,
        0 100%
        );
`

const Back = styled.div`
    background: ${colorHighlight};
    border: 1px solid ${colorHighlight};
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    clip-path: polygon(
        100% 0,
        100% calc(100% - 4rem),
        calc(100% - 4rem) 100%,
        0 100%,
        100% 100%
        );

    & > * {
        opacity: 0;
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: ${colorHighlight};
    transition: all .3s;

    font-family: 'inter', sans-serif;
    font-weight: 100;
`

const Subtitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: ${colorPrimary};
    transition: all .3s;

    font-family: 'inter', sans-serif;
    font-weight: 100;
`

const Container = styled.div`
    position: relative;
    z-index: 1;
    height: 25rem;

    & * {
        transition: all .3s;
    }

    &:hover ${Front} {
        background: ${colorPrimary};
        clip-path: polygon(
            0 0,
            100% 0,
            4rem 0,
            0 4rem,
            0 100%
            );
    }

    &:hover ${Back} {
        background: black;
        clip-path: polygon(
            100% 0,
            calc(0% + 5rem) 0,
            0 calc(0% + 5rem),
            0 100%,
            100% 100%
            );
    }

    &:hover ${Front} * {
        opacity: 0;
    }

    &:hover ${Back} * {
        opacity: 1;
    }
`

const ProjectLogo = styled.img`
    width: 100%;
    max-height: 100%;
`

const Logo = styled.img`
    width: 100%;
    max-height: 100%;
`

const LogoTitle = styled.h1`
    font-size: 1rem;
    pointer-events: none;
    position: absolute;
    background: white;
    width: 100%;

    text-align: center;

    clip-path: polygon(
        0 0,
        0 0,
        -5rem 5rem,
        0 5rem
        );
`

const BuiltWithLogo = styled.div`
    width: 50%;
    z-index: 2;

    &:nth-child(1) {
        position: absolute;
        top: 1rem;
        left: 2.5rem;
    }

    &:nth-child(2) {
        position: absolute;
        top: 3rem;
        right: 1rem;
    }

    &:nth-child(3) {
        position: absolute;
        top: 5rem;
        left: 1rem;
    }

    &:only-child {
        position: relative;
        top: 0;
        left: 0;

        width: 100%;
    }

    &:hover {
        transform: scale(1.2);

        & > ${LogoTitle} {
            clip-path: polygon(
                0 0,
                calc(100% + 5rem) 0,
                100% 5rem,
                0 5rem
                );
        }
    }
`

const BuiltWith = styled.div`
    position: relative;
    height: 200px;

    padding: 0 2rem;

    &:hover ${BuiltWithLogo}:not(:hover) {
        transform: scale(.95);
        opacity: .3;
        z-index: 1;
    }
`

const Link = styled.a`
    font-size: 1.1rem;
    text-decoration: none;
    text-align: center;
    padding: .5rem 1rem;
    background: black;
    position: relative;
    clip-path: polygon(
        100% 0,
        calc(0% + 1rem) 0,
        0 calc(0% + 1rem),
        0 100%,
        100% 100%
        );
    
    &:after {
        transition: all .3s;
    }

    &:first-child {
        color: ${colorSecondary};
        border: 1px solid ${colorSecondary};
        clip-path: polygon(
            0 0,
            100% 0,
            calc(100% - 1rem) 100%,
            0 100%
            );

        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${colorSecondary};
            clip-path: polygon(
                0 1rem,
                0 0,
                1rem 0
                );
        }
    }

    &:last-child {
        color: ${colorBg2};
        border: 1px solid ${colorBg2};
        clip-path: polygon(
            1rem 0,
            100% 0,
            100% 100%,
            0 100%
            );

        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${colorBg2};
            clip-path: polygon(
                100% calc(100% - 1rem),
                100% 100%,
                calc(100% - 1rem) 100%
                );
        }
    }

    &:only-child {
        color: ${colorPrimary};
        border: 1px solid ${colorPrimary};
        clip-path: polygon(
            1rem 0,
            100% 0,
            100% calc(100% - 1rem),
            calc(100% - 1rem) 100%,
            0 100%,
            0 1rem
            );

        &:after {
            content: "";
            opacity: 0;
        }
    }

    &:hover {
        color: white;
        border: 1px solid white;

        &:after {
            background: white;
        }
    }
`

const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    background: ${colorPrimary};
    
    &:hover {
        background: white;
    }
`

function Card(props) {
    return ( 
        <Container>
            <Front>
                <Title>{props.title}</Title>
                <ProjectLogo src={props.logo} alt="logo"/>
            </Front>

            <Back>
                <Subtitle>Built with:</Subtitle>
                <BuiltWith>
                    {props.builtWith?.map((item, index) => 
                        <BuiltWithLogo>
                            <Logo src={item.logo} alt={item.name}/>
                            <LogoTitle>{item.name}</LogoTitle>
                        </BuiltWithLogo>
                    )}
                    
                </BuiltWith>
                <Links>
                    <Link href={props.github} target="_blank">Github</Link>
                    {props.website !== undefined && <Link href={props.website} target="_blank">Website</Link>}
                </Links>
            </Back>
        </Container>
     );
}

export default Card;