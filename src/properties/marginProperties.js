import React from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

export default function PaddingProperties(props) {
    return ( 
        <Expander title="Margin">
            <NumberSelect 
                name="margin" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="marginTop" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="marginLeft" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="marginRight" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
            <NumberSelect 
                name="marginBottom" 
                OnStyleChange={props.OnStyleChange} 
                toggleEnabled={props.toggleEnabled}
            />
        </Expander>
     );
};