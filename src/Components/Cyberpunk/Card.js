import React from 'react';
import styled from 'styled-components';

// * colors:
// let colorBg = "#21006f"
// let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
let colorPrimary = "#fe3218"
// let colorSecondary = "#e100f5"

const Front = styled.div`
    background: black;
    border: 1px solid ${colorPrimary};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    clip-path: polygon(
        100% 0,
        100% calc(100% - 4rem),
        calc(100% - 4rem) 100%,
        0 100%,
        100% 100%
        );
`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: ${colorHighlight};
    transition: all .3s;

    font-family: 'inter', sans-serif;
    font-weight: 100;
`

const Container = styled.div`
    position: relative;
    z-index: 1;

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

    &:hover ${Front} > * {
        opacity: 0;
    }
`

function Card(props) {
    return ( 
        <Container>
            <Front>
                <Title>{props.title}</Title>
            </Front>

            <Back>
                <h1>YES</h1>
            </Back>
        </Container>
     );
}

export default Card;