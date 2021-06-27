import React, { Component } from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

class PaddingProperties extends Component {
    render() { 
        return ( 
            <Expander title="Margin">
                <NumberSelect 
                    name="margin" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="marginTop" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="marginLeft" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="marginRight" 
                    styles={this.props.parentProps.styles} 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="marginBottom" 
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