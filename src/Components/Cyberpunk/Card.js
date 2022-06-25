import React from 'react';
import styled from 'styled-components';

// * colors:
// let colorBg = "#21006f"
let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
let colorSecondary = "#e100f5"

const FrontEffects = styled.div`
    filter: drop-shadow(0 0 8px ${colorPrimary});
    width: 100%;
    height: 100%;
`

const FrontGlow = styled.div`
    border: 1px solid ${colorPrimary};
    width: 100%;
    height: 100%;

    background: linear-gradient(-45deg, ${colorPrimary} 0%, ${colorPrimary} 3.5rem, transparent 3.5rem);

    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 5rem),
        calc(100% - 5rem) 100%,
        0 100%
        );

    position: relative;
    z-index: 3;
`

const Front = styled.div`
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 1rem;
    z-index: 1;
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

const BackEffects = styled.div`
    filter: drop-shadow(0 0 3px ${colorHighlight});
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
`

const BackGlow = styled.div`
    border: 1px solid ${colorHighlight};
    background: ${colorHighlight};
    width: 100%;
    height: 100%;

    clip-path: polygon(
        100% 0,
        100% calc(100% - 4rem),
        calc(100% - 4rem) 100%,
        0 100%,
        100% 100%
        );
`

const Back = styled.div`
    background: ${colorHighlight};
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
    text-shadow: 0px 0px 5px ${colorHighlight};

    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`

const Tagline = styled.h2`
    font-size: 1rem;
    color: ${colorHighlight};
    text-align: center;

    font-family: 'inter', sans-serif;
    font-weight: 100;
    padding-bottom: 1rem;
`

const Subtitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: ${colorPrimary};
    transition: all .2s;

    font-family: 'inter', sans-serif;
    font-weight: 100;
`

const Container = styled.div`
    position: relative;
    z-index: 1;
    height: 30rem;

    & * {
        transition: all .2s;
    }

    &:hover ${Front}, &:hover ${FrontGlow} {
        background: ${colorPrimary};
        clip-path: polygon(
            0 0,
            100% 0,
            4rem 0,
            0 4rem,
            0 100%
            );
    }

    &:hover ${Back}, &:hover ${BackGlow} {
        background: linear-gradient(135deg, ${colorHighlight} 0%, ${colorHighlight} 3.5rem, transparent 3.5rem);
        clip-path: polygon(
            100% 0,
            calc(0% + 5rem) 0,
            0 calc(0% + 5rem),
            0 100%,
            100% 100%
            );
    }

    &:hover ${Back} {
        background: rgba(0,0,0,0.3);
    }

    &:hover ${Front} * {
        opacity: 0;
    }

    &:hover ${Back} * {
        opacity: 1;
    }

    &:hover ${FrontEffects} {
        filter: drop-shadow(0 0 3px ${colorPrimary});
    }

    &:hover ${BackEffects} {
        filter: drop-shadow(0 0 8px ${colorHighlight});
    }

    @media (max-width: 1300px) {
        height: 30rem;
    }
`

const ProjectLogo = styled.img`
    width: 100%;
    max-height: 100%;
    position: relative;
    z-index: -1;

    object-fit: contain;
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

    padding: 0 3rem;

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
        transition: all .2s;
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
            <FrontEffects>
                <FrontGlow />
            </FrontEffects>
            <Front>
                <Title>{props.title}</Title>
                <Tagline>{props.tagline}</Tagline>
                <ProjectLogo src={props.logo} alt="logo"/>
            </Front>

            <BackEffects>
                <BackGlow />
            </BackEffects>
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