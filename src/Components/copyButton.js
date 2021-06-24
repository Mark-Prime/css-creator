import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
    background: #303030;
    color: #BFBFBF;
    border-radius: 10%;
    float: right;
    padding: 0 3px 3px 3px;

    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`

class CopyButton extends Component {
    render() { 
        return ( 
            <Button
                onClick={() =>  navigator.clipboard.writeText(this.props.text)}
            >
                Copy
            </Button>
         );
    }
}
 
export default CopyButton;