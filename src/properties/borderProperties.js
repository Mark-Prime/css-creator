import React, { Component } from 'react';
import Select from '../Components/select';
import NumberSelect from '../Components/numberSelect';
import Expander from '../Components/expander';


class BorderProperties extends Component {
    render() { 
        return ( 
            <Expander title="Border">
                <Select 
                    name="borderStyle" 
                    options={['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']}
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="borderWidth" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
                <NumberSelect 
                    name="borderRadius" 
                    OnStyleChange={this.props.OnStyleChange} 
                    toggleEnabled={this.props.toggleEnabled}
                />
            </Expander>
         );
    }
}
 
export default BorderProperties;