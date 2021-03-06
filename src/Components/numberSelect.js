import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Label, InputLabel, CheckBox } from './Label'

import styled from 'styled-components';

const defaultSuffixs = ['px', 'cm', 'mm', 'in', 'pt', 'pc', '%', 'em', 'rem', 'vh', 'vw', 'ex', 'ch', 'vmin', 'vmax', 'auto']

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 21;
`

const SelectWrapper = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
`

const NumberInput = styled.input`
    border: none;
    border-bottom: 1px dotted darkgray;
    outline: none;
    background: #303030;
    color: #fff;
    width: 45%;
    margin-left: 4px;
    flex: 1 1;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
        text-decoration: line-through;
    }
`

const SuffixSelect = styled.select`
    border: none;
    border-bottom: 1px dotted darkgray;
    background: #303030;
    color: #fff;
    margin-left: 4px;
    flex: 1 1;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #BFBFBF;
        text-decoration: line-through;
    }
`

class NumberSelect extends Component {
    state = {
        suffix: "px",
    }

    OnSuffixChange = (event) => {
        let value = event.target.value

        if (this.props.isChild) {
            let name = this.props.name;
            let parent = name.split("_")[0];
            let child = name.split("_")[1];
            let styleValue = parseInt(this.props.styles[this.props.title].props[parent].props[child].val, 10);

            let selection = this.props.selection;

            if (this.props.selection === 'content' && this.props.selector !== '') {
                selection = this.props.selector;
            } else if (this.props.selection !== 'content') {
                if (this.props.selector !== '') {
                    selection = `${this.props.selection}_${this.props.selector}`;
                }
            }

            if (selection !== 'content') {
                styleValue = this.props[selection][parent].props[child].val.replace(this.state.suffix, '');
            }

            this.setState({
                suffix: value
            })

            this.OnStyleChange(
                {
                    target: {
                        dataset: {
                            suffix: value === 'auto' ? '' : value
                        },
                        value: value === 'auto' ? "auto" : styleValue,
                        name: this.props.name
                    }
                }
            )

            return 
        }

        let styleValue = parseInt(this.props.styles[this.props.title].props[this.props.name].val, 10);

        let selection = this.props.selection;

        if (this.props.selection === 'content' && this.props.selector !== '') {
            selection = this.props.selector;
        } else if (this.props.selection !== 'content') {
            if (this.props.selector !== '') {
                selection = `${this.props.selection}_${this.props.selector}`;
            }
        }

        if (selection !== 'content') {
            styleValue = this.props[selection][this.props.title].props[this.props.name].val.replace(this.state.suffix, '');
        }

        if (isNaN(styleValue)) {
            styleValue = 0
        }

        this.setState({
            suffix: value
        })
        
        this.OnStyleChange(
            {
                target: {
                    dataset: {
                        suffix: value === 'auto' ? '' : value
                    },
                    value: value === 'auto' ? "auto" : styleValue,
                    name: this.props.name
                }
            }
        )
    }

    OnStyleChange = (event) => {
        let suffix = event.target.dataset.suffix
        if (suffix !== 'auto') {
            let value = event.target.value;
            if (suffix) {
                value += suffix
            }
            
            let styles = this.props.styles;
            let selection = this.props.selection;

            if (this.props.selection === 'content' && this.props.selector !== '') {
                console.log('SELECTION: ', this.props.selection)
                console.log('SELECTOR: ', this.props.selector)
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
                let name = event.target.name;
                let parent = name.split("_")[0];
                let child = name.split("_")[1];
                styles[this.props.title].props[parent].props[child].val = value;
                styles[this.props.title].props[parent].props[child].suffixSelected = suffix;
                this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, isChild: true, parent, child, title: this.props.title, name, css: styles.css, selection: selection }})
                return
            }
            
            styles[this.props.title].props[event.target.name].val = value;
            styles[this.props.title].props[event.target.name].suffixSelected = suffix;
            this.props.dispatch({ type: 'UPDATE_CSS' , payload: {styles, title: this.props.title, name: event.target.name, css: styles.css, selection: selection }})
        }
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

    componentDidMount() {
        if (this.props.suffixSelected) {
            this.setState({
                suffix: this.props.suffixSelected
            })
        }
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
        let suffixOverrides;
        let suffixSelected;
        let val;

        if (name.indexOf("_") === -1) {
            alias = style.props[name].alias;
            enabled = style.props[name].enabled;
            suffixOverrides = style.props[name].suffixOverrides;
            suffixSelected = style.props[name].suffixSelected;
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
            suffixOverrides = style.props[parent].props[child].suffixOverrides;
            suffixSelected = style.props[parent].props[child].suffixSelected;
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
                <SelectWrapper>
                    <NumberInput 
                        name={name}
                        data-suffix={suffixSelected || this.state.suffix}
                        type="number"
                        step={this.props.step ? this.props.step : "any"}
                        min={this.props.min ? this.props.min : 0}
                        max={this.props.max ? this.props.max : "none"}
                        value={val.replace(suffixSelected || this.state.suffix, '')
                                ||
                            ((suffixSelected === 'auto' || this.state.suffix === 'auto') ? '' : 0)} 
                        onChange={this.OnStyleChange} 
                        disabled={!enabled || this.state.suffix === 'auto'}
                    />
                    {(!suffixOverrides || suffixOverrides.length > 0) && <SuffixSelect
                        name={name}
                        value={suffixSelected || this.state.suffix} 
                        onChange={this.OnSuffixChange} 
                        disabled={!enabled}
                    >
                        {suffixOverrides ? 
                            suffixOverrides.map((item) => {
                                return <option value={item} key={item}>{item}</option>
                            }
                        ) : 
                            defaultSuffixs.map((item) => {
                                return <option value={item} key={item}>{item}</option>
                            })
                        }
                    </SuffixSelect>}
                </SelectWrapper>
            </Wrapper>
         );
    }
}

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(NumberSelect);