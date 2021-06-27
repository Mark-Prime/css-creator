import React, { Component } from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

class PaddingProperties extends Component {
    render() { 
        return ( 
            <Expander title="Padding">
                <NumberSelect 
                    name="padding"  
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingTop"  
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingLeft"  
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingRight"  
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="paddingBottom"  
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default PaddingProperties;