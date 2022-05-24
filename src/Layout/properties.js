import React from 'react';
import styled from 'styled-components';
import Panel from '../properties/propertyPanel';
import EditSelect from './editSelect';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    background: #303030;
    border-left: 2px rgba(255, 255, 255, 0.12) solid;
    width: 300px;
    height: 100vh; 
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'inter', sans-serif;
`

const PropList = styled.div`
    flex-shrink: 1;
    padding: 3px;
    overflow-x: hidden;
    overflow-y: auto;
`;

const Input = styled.div`
    display: flex;
    justify-content: space-between;
`

const TextBox = styled.input`
`

const InputLabel = styled.label`
    padding-left: 4px;
`

const Hr = styled.hr`
    margin-bottom: 3px;
`

const mapStateToProps = (props) => (props);

export default connect(mapStateToProps)(function Properties(props) {
    let styles = props.styles;

    if (props.selection === 'content' && props.selector !== '') {
        styles = props[props.selector]
    }

    if (props.selection !== 'content') {
        styles = props[props.selection];

        if (props.selector !== '') {
            styles = props[`${props.selection}_${props.selector}`];
        }
    }
    
    console.log('PROPERTIES');
    console.log(`${props.selection}_${props.selector}`);
    console.table(styles);
      
    return ( 
        <Wrapper>
            <PropList>
                <Input>
                    <InputLabel>Content: </InputLabel>
                    <TextBox value={props.text} onChange={props.setText}></TextBox>
                </Input>
                <Hr />
                {Object.keys(styles).map((key, i) => {
                    if (key !== 'css'){
                        return (
                            <Panel styles={styles[key].props} title={key} key={`${key}-${i}`}/>
                        )
                    } else return null
                })}
            </PropList>
            <EditSelect />
        </Wrapper>
        );
})