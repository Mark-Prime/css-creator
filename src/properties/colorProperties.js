import React from 'react';
import Expander from '../Components/expander';
import ColorSelector from '../Components/colorSelector';
 
export default function ColorProperties() {
    return ( 
        <Expander title="Color">
            <ColorSelector 
                name="color"
                title="Color"
            />
            <ColorSelector 
                name="background"
                title="Color"
            />
            <ColorSelector 
                name="borderColor"
                title="Color"
            />
        </Expander>
     );
}