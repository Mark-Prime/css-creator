import styled from "styled-components"

const Label = styled.label`
    position: relative;
    cursor: pointer;
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

export {
    Label,
    InputLabel,
    CheckBox
}