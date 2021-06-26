import React, {Component} from 'react';

import { SketchPicker } from 'react-color';
import styled from 'styled-components';

import aliases from '../Utility/aliases';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21;
`

const PopoutWrapper = styled.div`
    position: absolute;
    z-index: 1;
    right: 320px;
    top: 10px;
    background: #303030;
    border: 2px solid rgba(255, 255, 255, 0.12);
    padding: 7px;
`

const CheckBox = styled.input`

`

const InputLabel = styled.label`

`


class ColorSelector extends Component {

    state = {
        open: false
    }

    handleChangeComplete = (color) => {

        this.props.onStyleChange({
            target: {
                dataset: {},
                value: color.hex,
                name: this.props.name
            }
        })
    }

    toggleSketchPicker = () => {
        this.setState({open: !this.state.open})
    }

    render() { 

        const ColorShowcase = styled.div`
            width: 31%;
            text-align: center;
            cursor: pointer;
            position: relative;
            background: ${this.props.style.color};
        `

        const HexCode = styled.div`
            background: #303030;
            float: left;
            padding-right: 3px;
        `

        return ( 
            <Wrapper>
                <InputLabel>
                    <CheckBox 
                        name={this.props.name}
                        type="checkbox" 
                        checked={this.props.enabled[this.props.name]}
                        onChange={this.props.toggleEnabled}
                    />
                    {aliases[this.props.name]}
                </InputLabel>
                <ColorShowcase onClick={this.toggleSketchPicker}>
                    <HexCode>{this.props.style.color}</HexCode>
                </ColorShowcase>
                {this.state.open && 
                    <PopoutWrapper>
                        <SketchPicker
                            color={ this.props.style.color }
                            onChange={ this.handleChangeComplete }
                            disableAlpha={true}
                            margin="7px"
                        />
                    </PopoutWrapper>
                }
            </Wrapper>
         );
    }
}
 
export default ColorSelector;