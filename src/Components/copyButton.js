import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';

const Clicked = keyframes`
    0% {
        top: -20px;
        opacity: 0;
    }

    25% {
        top: -60px;
        opacity: 1;
    }

    75% {
        top: -60px;
        opacity: 1;
    }

    100% {
        top: -20px;
        opacity: 0;
    }
`

const Button = styled.a`
    background: #303030;
    color: #BFBFBF;
    float: right;
    padding: 0 3px 3px 3px;
    position: relative;

    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`

const Popup = styled.p`
    background: #303030;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 0 3px 3px 3px;

    position: absolute;
    right: 0px;
    top: -60px;
    opacity: 1;

    animation: ${Clicked} 2s 1;
`

class CopyButton extends Component {

    state = {
        wobble: false
    }

    onClicked = () => {
        navigator.clipboard.writeText(this.props.text);
        this.setState({wobble: true})
    }

    render() { 
        return ( 
            <>
                <Button
                    onClick={this.onClicked}
                >
                    Copy
                </Button>
                {this.state.wobble  && <Popup
                    onAnimationEnd={() => this.setState({wobble: false})}
                >Copied</Popup>}
            </>
         );
    }
}

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(CopyButton);