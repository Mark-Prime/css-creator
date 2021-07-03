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
        const name = event.target.name
        let styles = {...this.props.styles}
        styles[name].enabled = !styles[name].enabled
        this.props.dispatch({ type: 'SET_STYLE' , payload: styles})
    }

    OnStyleChange = (event) => {
        let suffix = event.target.dataset.suffix
        let value = event.target.value
        if (suffix) { 
            value += suffix
        }
        let styles = {...this.props.styles}
        styles[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_STYLE' , payload: styles})
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
            background: ${this.props.styles[this.props.name].val};
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
                        checked={this.props.styles[this.props.name].enabled}
                        onChange={this.toggleEnabled}
                    />
                    {this.props.styles[this.props.name].alias}:
                </InputLabel>
                <ColorShowcase onClick={this.toggleSketchPicker}>
                    <HexCode>{this.props.styles[this.props.name].val}</HexCode>
                </ColorShowcase>
                {this.state.open && 
                    <PopoutWrapper>
                        <SketchPicker
                            color={ this.props.styles[this.props.name].val }
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

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(ColorSelector);