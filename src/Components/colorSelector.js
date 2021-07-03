import React, {Component} from 'react';

import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

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

    toggleEnabled = (event) => {
        const name = event.target.name;

        let styles = this.props.styles;

        if (event.target.checked) {
            styles[this.props.title].enabled = true;
            styles[this.props.title].props[name].enabled = true;
        } else {
            styles[this.props.title].props[name].enabled = false;

            let keys = Object.keys(styles[this.props.title].props);
            let i = 0, len = keys.length;

            let enabled = false

            while (i < len) {
                const key = keys[i];

                if (styles[this.props.title].props[key].enabled) {
                    enabled = true;
                }

                i++;
            }

            styles[this.props.title].enabled = enabled;
        }

        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles
        styles[this.props.title].props[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: {styles, title: this.props.title, name: event.target.name, css: this.props.css}})
    }

    handleChangeComplete = (color) => {
        this.OnStyleChange({
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
            background: ${this.props.styles[this.props.title].props[this.props.name].val};
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
                        checked={this.props.styles[this.props.title].props[this.props.name].enabled}
                        onChange={this.toggleEnabled}
                    />
                    {this.props.styles[this.props.title].props[this.props.name].alias}:
                </InputLabel>
                <ColorShowcase onClick={this.toggleSketchPicker}>
                    <HexCode>{this.props.styles[this.props.title].props[this.props.name].val}</HexCode>
                </ColorShowcase>
                {this.state.open && 
                    <PopoutWrapper>
                        <SketchPicker
                            color={ this.props.styles[this.props.title].props[this.props.name].val }
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

const mapStateToProps = ({ styles, css }) => ({ styles, css });

export default connect(mapStateToProps)(ColorSelector);