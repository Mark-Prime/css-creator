import React, { Component } from 'react';
import styled from 'styled-components';
import TextProperties from '../properties/textProperties';
import PaddingProperties from '../properties/paddingProperties';
import BorderProperties from '../properties/borderProperties';

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
        let newProps = {...this.props.style}
        let value = event.target.value
        if (suffix) { 
            value += suffix
        }
        newProps[event.target.name] = value;
        this.props.setStyle(newProps)
    }

    render() { 
        return ( 
            <Wrapper>
                <TextProperties OnStyleChange={this.OnStyleChange} parentProps={this.props}/>
                <PaddingProperties OnStyleChange={this.OnStyleChange} parentProps={this.props}/>
                <BorderProperties OnStyleChange={this.OnStyleChange} parentProps={this.props}/>
                
            </Wrapper>
         );
    }
}
 
export default Properties;