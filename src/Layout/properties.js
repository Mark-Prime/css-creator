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

const mapStateToProps = ({ styles }) => ({ styles });

export default connect(mapStateToProps)(function Properties(props) {
    return ( 
        <Wrapper>
            <PropList>
                <Input>
                    <InputLabel>Content: </InputLabel>
                    <TextBox value={props.text} onChange={props.setText}></TextBox>
                </Input>
                <hr />
                {Object.keys(props.styles).map((key) => {
                    return (
                        <Panel styles={props.styles[key].props} title={key} key={key}/>
                    )
                })}
            </PropList>
            <EditSelect />
        </Wrapper>
        );
})