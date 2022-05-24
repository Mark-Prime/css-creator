import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Label, InputLabel, CheckBox } from './Label'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Option = styled.option`

`

const SelectInput = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    width: 44%;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
        text-decoration: line-through;
    }
`

class Select extends Component {

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

        let style = styles[this.props.title];

        if (event.target.checked) {
            style.enabled = true;
            style.props[name].enabled = true;
        } else {
            style.props[name].enabled = false;

            let keys = Object.keys(style.props);
            let i = 0, len = keys.length;

            let enabled = false

            while (i < len) {
                const key = keys[i];

                if (style.props[key].enabled) {
                    enabled = true;
                }

                i++;
            }

            style.enabled = enabled;
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
            <Wrapper key={this.props.log}>
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
                <SelectInput 
                    name={name}
                    value={val} 
                    onChange={this.OnStyleChange} 
                    disabled={!enabled}
                >
                    {this.props.options.map(item => (
                        <Option value={item} key={`${name}-${item}`}>
                            {item}
                        </Option>
                    ))}
                </SelectInput>
            </Wrapper>
         );
    }
}

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(Select);