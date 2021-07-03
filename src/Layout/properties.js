import React, { Component } from 'react';
import styled from 'styled-components';
import TextProperties from '../properties/textProperties';
import PaddingProperties from '../properties/paddingProperties';
import MarginProperties from '../properties/marginProperties';
import BorderProperties from '../properties/borderProperties';
import ColorProperties from '../properties/colorProperties';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    background: #303030;
    border-left: 2px rgba(255, 255, 255, 0.12) solid;
    width: 300px;
    padding: 3px;
    overflow-x: hidden;
    overflow-y: auto;
`
class Properties extends Component {

    OnStyleChange = (event) => {
        let suffix = event.target.dataset.suffix
        let value = event.target.value
        if (suffix) { 
            value += suffix
        }
        this.props.styles[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: this.props.styles})
    }

    render() { 
        return ( 
            <Wrapper>
                <TextProperties OnStyleChange={this.OnStyleChange} text={this.props.text} SetText={this.props.SetText}/>
                <PaddingProperties OnStyleChange={this.OnStyleChange} />
                <MarginProperties OnStyleChange={this.OnStyleChange} />
                <BorderProperties OnStyleChange={this.OnStyleChange} />
                <ColorProperties OnStyleChange={this.OnStyleChange} />
            </Wrapper>
         );
    }
}

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(Properties);