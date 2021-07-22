import React from 'react';
import styled from 'styled-components';

export default function Noun(props) {
    const Noun = styled.div`
        color: ${props.color};
        text-shadow: 1px 1px 0 ${props.shadow};
    `
    return <Noun>{props.children}</Noun>
}