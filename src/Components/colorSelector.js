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

const Xbutton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
`


class ColorSelector extends Component {

    state = {
        open: false
    }

    toggleEnabled = (event) => {
        const name = event.target.name;

        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }

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

        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: this.props.selection }})
    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }
        
        styles[this.props.title].props[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: this.props.selection }})
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
        let name = this.props.name;
        let style = this.props.styles[this.props.title];
    
        if (this.props.selection !== 'content') {
            style = this.props[this.props.selection][this.props.title];
        }

        if (style.props[name].key) {
            let key = style.props[name].key;
            let keyEnabled = style.props[key].enabled;
            let keyVal = style.props[key].val;

            if (!keyEnabled || !style.props[name].showOnValue[keyVal]){
                this.toggleEnabled({target: {name: name, checked: false}})
                return null;
            }
        }

        const ColorShowcase = styled.div`
            width: 44%;
            text-align: center;
            cursor: pointer;
            position: relative;
            background: ${style.props[name].val};
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
                        name={name}
                        type="checkbox" 
                        checked={style.props[name].enabled}
                        onChange={this.toggleEnabled}
                        key={this.props.log}
                    />
                    {style.props[name].alias}:
                </InputLabel>
                <ColorShowcase onClick={this.toggleSketchPicker}>
                    <HexCode>{style.props[name].val}</HexCode>
                </ColorShowcase>
                {this.state.open && 
                    <PopoutWrapper>
                        {style.props[name].alias}:
                        <Xbutton onClick={this.toggleSketchPicker}>X</Xbutton>
                        <SketchPicker
                            color={ style.props[name].val }
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

const mapStateToProps = ({ styles, container, selection, log }) => ({ styles, container, selection, log });

export default connect(mapStateToProps)(ColorSelector);