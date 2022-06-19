import styled from 'styled-components';

// * colors:
// let colorBg = "#21006f"
// let colorBg2 = "#450eff"
let colorHighlight = "#ff911a"
// let colorPrimary = "#fe3218"
// let colorSecondary = "#e100f5"

const Header = styled.h1`
    font-size: 4rem;
    letter-spacing: 1rem;
    text-align: center;
    color: ${colorHighlight};
    text-shadow: 0px 0px 5px ${colorHighlight};
    font-family: 'Major Mono Display', sans-serif;
    font-weight: 100;
    transition: all .3s;
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;

    transform: translateX(.5rem);

    @media (max-width: 1000px) {
        font-size: 3rem;
    }  

    @media (max-width: 750px) {
        font-size: 2.5rem;
    }  
`

export default Header;