import React from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';
 
export default function PaddingProperties(props) {
    return ( 
        <Expander title="Padding">
            <NumberSelect 
                name="padding"  
                title="Padding"
            />
            <NumberSelect 
                name="paddingTop"  
                title="Padding"
            />
            <NumberSelect 
                name="paddingLeft"  
                title="Padding"
            />
            <NumberSelect 
                name="paddingRight"  
                title="Padding"
            />
            <NumberSelect 
                name="paddingBottom"  
                title="Padding"
            />
        </Expander>
     );   
};