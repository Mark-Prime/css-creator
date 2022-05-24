import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Label, InputLabel, CheckBox } from './Label'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21px;
`

const Text = styled.p`
    color: #fff;

    &[disabled] {
        color: #BFBFBF;
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
        
        let style = styles[this.props.title];

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

        return ( 
            <Wrapper key={this.props.log}>
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
                <Text disabled={!style.props[name].enabled}>Shorthand</Text>
            </Wrapper>
         );
    }
}

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(Select);