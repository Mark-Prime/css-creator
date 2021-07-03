import React from 'react';
import NumberSelect from '../Components/numberSelect'
import Expander from '../Components/expander';

export default function PaddingProperties(props) {
    return ( 
        <Expander title="Margin">
            <NumberSelect 
                name="margin" 
                title="Margin"
            />
            <NumberSelect 
                name="marginTop" 
                title="Margin"
            />
            <NumberSelect 
                name="marginLeft" 
                title="Margin"
            />
            <NumberSelect 
                name="marginRight" 
                title="Margin"
            />
            <NumberSelect 
                name="marginBottom" 
                title="Margin"
            />
        </Expander>
     );
};