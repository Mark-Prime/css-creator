import React from 'react';
import NumberSelect from '../Components/numberSelect'
import ColorSelector from '../Components/colorSelector';
import Select from '../Components/select';
import Expander from '../Components/expander';
import Shorthand from '../Components/shorthand';

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
                                key={`${props.title}-${i}-${style}-num`}
                            />
                        )
                    case "color":
                        return (
                            <ColorSelector 
                                name={style}
                                title={props.title}
                                key={`${props.title}-${i}-${style}-color`}
                            />
                        )
                    case "select":
                        return (
                            <Select 
                                name={style}
                                title={props.title}
                                options={props.styles[style].options}
                                key={`${props.title}-${i}-${style}-select`}
                            />
                        )
                    case "shorthand":
                        return (
                            <>
                                <Shorthand 
                                    name={style}
                                    title={props.title}
                                    key={`${props.title}-${i}-style`}
                                />
                                {props.styles[style].enabled && Object.keys(props.styles[style].props).map((innerStyle, i) => {
                                    let prop = props.styles[style].props[innerStyle]
                                    switch(prop.type) {
                                        case "number":
                                            return (
                                                <NumberSelect 
                                                    name={`${style}_${innerStyle}`}
                                                    isChild={true}
                                                    title={props.title}
                                                    min={prop.min}
                                                    max={prop.max}
                                                    key={`${props.title}-${i}-${prop.alias}-num`}
                                                />
                                            )
                                        case "color":
                                            return (
                                                <ColorSelector 
                                                    name={`${style}_${innerStyle}`}
                                                    isChild={true}
                                                    title={props.title}
                                                    key={`${props.title}-${i}-${prop.alias}-color`}
                                                />
                                            )
                                        case "select":
                                            return (
                                                <Select 
                                                    name={`${style}_${innerStyle}`}
                                                    isChild={true}
                                                    title={props.title}
                                                    options={prop.options}
                                                    key={`${props.title}-${i}-${prop.alias}-select`}
                                                />
                                            )
                                        default:
                                            return null
                                    }
                                })}
                            </>
                        )
                    default:
                        return null
                }
            })}
        </Expander>
     );
}