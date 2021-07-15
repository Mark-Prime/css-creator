import React from 'react';
import NumberSelect from '../Components/numberSelect'
import ColorSelector from '../Components/colorSelector';
import Select from '../Components/select';
import Expander from '../Components/expander';

export default function Panel(props) {
    return ( 
        <Expander title={props.title}>
            {Object.keys(props.styles).map((style, i) => {
                switch(props.styles[style].type) {
                    case "number":
                        return (
                            <NumberSelect 
                                name={style}
                                title={props.title}
                                min={props.styles[style].min}
                                max={props.styles[style].max}
                                key={`${props.title}-${i}-style`}
                            />
                        )
                    case "color":
                        return (
                            <ColorSelector 
                                name={style}
                                title={props.title}
                                key={`${props.title}-${i}-style`}
                            />
                        )
                    case "select":
                        return (
                            <Select 
                                name={style}
                                title={props.title}
                                options={props.styles[style].options}
                                key={`${props.title}-${i}-style`}
                            />
                        )
                    default:
                        return null
                }
            })}
        </Expander>
     );
}