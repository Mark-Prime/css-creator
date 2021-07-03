import React from 'react';
import Select from '../Components/select';
import NumberSelect from '../Components/numberSelect';
import Expander from '../Components/expander';

export default function borderProperties(props) {
    return ( 
        <Expander title="Border">
            <Select 
                name="borderStyle" 
                options={['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']}
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="borderWidth" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="borderRadius" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
        </Expander>
     );
}