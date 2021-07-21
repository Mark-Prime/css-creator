import React, { Component } from 'react';
import styled from 'styled-components';
import CodingBackground from '../../public/img/coding-mid.jpg'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
`

const Header = styled.div`
    background-image: url(${CodingBackground});
    width: 100%;
    height: 90vh;
`

const NamePlate = styled.div`

`

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Header>
                    <NamePlate>Mark Spannbauer</NamePlate>
                </Header>
            </Container>
         );
    }
}
 
export default Home;