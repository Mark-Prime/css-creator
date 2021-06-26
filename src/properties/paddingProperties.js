import React, { Component } from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

class PaddingProperties extends Component {
    render() { 
        return ( 
            <Expander title="Padding">
                <NumberSelect 
                    name="padding" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingTop" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingLeft" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingRight" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingBottom" 
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