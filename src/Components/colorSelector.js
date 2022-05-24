import React, {Component} from 'react';

import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import { Label, InputLabel, CheckBox } from './Label'
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

const Xbutton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
`

const ColorShowcase = styled.div`
    width: 44%;
    text-align: center;
    cursor: pointer;
    position: relative;
    background: ${props => props.val};
`

const HexCode = styled.div`
    background: #303030;
    color: #fff;
    float: left;
    padding-right: 3px;
    height: 100%;

    &[disabled] {
        color: #BFBFBF;
    }
`


class ColorSelector extends Component {

    state = {
        open: false
    }

    toggleEnabled = (event) => {
        const name = event.target.name;
        let styles = this.props.styles;
        let selection = this.props.selection;

        if (this.props.selection === 'content' && this.props.selector !== '') {
            selection = this.props.selector;
            styles = this.props[selection];
        } else if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection];

            if (this.props.selector !== '') {
                selection = `${this.props.selection}_${this.props.selector}`;
                styles = this.props[selection];
            }
        }

        if (this.props.isChild) {
            let parent = name.split("_")[0];
            let child = name.split("_")[1];
            if (event.target.checked) {
                styles[this.props.title].enabled = true;
                styles[this.props.title].props[parent].enabled = true;
                styles[this.props.title].props[parent].props[child].enabled = true;
            } else {
                styles[this.props.title].props[parent].props[child].enabled = false;
            }

            this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, isChild: true, parent, child, title: this.props.title, name, css: styles.css, selection: selection }})
            return
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

        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: selection }})
    }

    OnStyleChange = (event) => {
        let value = event.target.value
        let styles = this.props.styles;
        let selection = this.props.selection;

        if (this.props.selection === 'content' && this.props.selector !== '') {
            selection = this.props.selector;
            styles = this.props[selection];
        } else if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection];

            if (this.props.selector !== '') {
                selection = `${this.props.selection}_${this.props.selector}`;
                styles = this.props[selection];
            }
        }

        if (this.props.isChild) {
            let name = this.props.name;
            let parent = name.split("_")[0];
            let child = name.split("_")[1];
            styles[this.props.title].props[parent].props[child].val = value;
            this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, isChild: true, parent, child, title: this.props.title, name, css: styles.css, selection: selection }})
            return
        }
        
        styles[this.props.title].props[event.target.name].val = value;
        this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: selection }})
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

        if (this.props.selection === 'content' && this.props.selector !== '') {
            styles = this.props[this.props.selector]
        } else if (this.props.selection !== 'content') {
            styles = this.props[this.props.selection];

            if (this.props.selector !== '') {
                styles = this.props[`${this.props.selection}_${this.props.selector}`];
            }
        }

        let title = this.props.title;
        let style = styles[title]
        let alias = '';
        let enabled;
        let val;

        if (name.indexOf("_") === -1) {
            alias = style.props[name].alias;
            enabled = style.props[name].enabled;
            val = style.props[name].val;

            if (style.props[name].key) {
                let key = style.props[name].key;
                let keyEnabled = style.props[key].enabled;
                let keyVal = style.props[key].val;
    
                if (style.props[name].type !== 'shorthand') {
                    if (!keyEnabled ||!style.props[name].showOnValue[keyVal]){
                        return null;
                    }
                } else {
                    if (!keyEnabled) {
                        return null;
                    }
                }
            }
        } else {
            let parent = name.split("_")[0];
            let child = name.split("_")[1];

            alias = style.props[parent].props[child].alias;
            enabled = style.props[parent].props[child].enabled;
            val = style.props[parent].props[child].val;
        }

        return ( 
            <Wrapper>
                <Label>
                    <CheckBox 
                        name={name}
                        type="checkbox" 
                        checked={enabled}
                        onChange={this.toggleEnabled}
                        key={this.props.log}
                    />
                    <InputLabel>{alias}:</InputLabel>
                </Label>
                <ColorShowcase val={val} onClick={this.toggleSketchPicker}>
                    <HexCode disabled={!enabled}>{val}</HexCode>
                </ColorShowcase>
                {this.state.open && 
                    <PopoutWrapper>
                        {alias}:
                        <Xbutton onClick={this.toggleSketchPicker}>X</Xbutton>
                        <SketchPicker
                            color={ val }
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