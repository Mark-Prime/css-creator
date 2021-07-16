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

const Label = styled.label`
    position: relative;
`

const InputLabel = styled.div`
    display: inline;
    color: #BFBFBF;

    &::before {
        content: "";
        display: inline-block;
        clear: both;
        margin: 6px 3px 0 4px;
        width: 10px;
        height: 10px;

        transition: all 0.2s ease;
        clip-path: polygon(0% 0%, 0 20%, 80% 20%, 80% 100%, 100% 100%, 100% 0%);
        background-color: #BFBFBF;
    }

    &::after {
        content: "";
        display: inline-block;
        clear: both;
        margin: 0 3px 0 4px;
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 7px;

        transition: all 0.2s ease;
        clip-path: polygon(0% 0%, 20% 0, 20% 80%, 100% 80%, 100% 100%, 0% 100%);
        background-color: #BFBFBF;
    }
`

const CheckBox = styled.input`
    display: none;

    &:checked + ${InputLabel}::before {
        clip-path: polygon(75% 0, 100% 0%, 60% 100%, 35% 100%, 35% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel}::after {
        clip-path: polygon(0 50%, 25% 50%, 60% 100%, 35% 100%, 35% 100%, 35% 100%);
        background-color: #fff;
    }

    &:checked + ${InputLabel} {
        color: #fff;
    }
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
        let styles = this.props.styles;

        if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection]
        }
        
        let style = styles[this.props.title];

        if (style.props[name].key) {
            let key = style.props[name].key;
            let keyEnabled = style.props[key].enabled;
            let keyVal = style.props[key].val;

            if (!keyEnabled || !style.props[name].showOnValue[keyVal]){
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
                <Label>
                    <CheckBox 
                        name={name}
                        type="checkbox" 
                        checked={style.props[name].enabled}
                        onChange={this.toggleEnabled}
                        key={this.props.log}
                    />
                    <InputLabel>{style.props[name].alias}:</InputLabel>
                </Label>
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

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(ColorSelector);