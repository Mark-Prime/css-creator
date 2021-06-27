import React, { Component } from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

class PaddingProperties extends Component {
    render() { 
        return ( 
            <Expander title="Margin">
                <NumberSelect 
                    name="margin" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="marginTop" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="marginLeft" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="marginRight" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="marginBottom" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default PaddingProperties;