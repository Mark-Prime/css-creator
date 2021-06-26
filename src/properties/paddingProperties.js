import React, { Component } from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

class PaddingProperties extends Component {
    render() { 
        return ( 
            <Expander title="Padding">
                <NumberSelect 
                    name="padding" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingTop" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingLeft" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingRight" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingBottom" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default PaddingProperties;