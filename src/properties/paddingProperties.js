import React from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';
 
export default function PaddingProperties(props) {
    return ( 
        <Expander title="Padding">
            <NumberSelect 
                name="padding"  
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="paddingTop"  
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="paddingLeft"  
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="paddingRight"  
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="paddingBottom"  
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
        </Expander>
     );   
};