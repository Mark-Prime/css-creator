import React from 'react';
import NumberSelect from '../Components/numberSelect'
import ColorSelector from '../Components/colorSelector';
import Select from '../Components/select';
import Expander from '../Components/expander';

export default function Panel(props) {
    return ( 
        <Expander title={props.title}>
            {Object.keys(props.styles).map((style) => {
                switch(props.styles[style].type) {
                    case "number":
                        return (
                            <NumberSelect 
                                name={style}
                                title={props.title}
                            />
                        )
                    case "color":
                        return (
                            <ColorSelector 
                                name={style}
                                title={props.title}
                            />
                        )
                    case "select":
                        return (
                            <Select 
                                name={style}
                                title={props.title}
                                options={props.styles[style].options}
                            />
                        )
                    default:
                        return null
                }
            })}
        </Expander>
     );
}