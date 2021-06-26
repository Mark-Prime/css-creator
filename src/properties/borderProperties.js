import React, { Component } from 'react';
import Select from '../Components/select';
import NumberSelect from '../Components/numberSelect';
import Expander from '../Components/expander';


class BorderProperties extends Component {
    render() { 
        return ( 
            <Expander title="Borders">
                <Select 
                    name="borderStyle" 
                    options={['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']}
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="borderWidth" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
                <NumberSelect 
                    name="borderRadius" 
                    style={this.props.parentProps.style} 
                    enabled={this.props.parentProps.enabled} 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.parentProps.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default BorderProperties;