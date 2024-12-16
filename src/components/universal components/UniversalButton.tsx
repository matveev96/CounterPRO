import React from 'react';
import styled from "styled-components";

type UniversalButtonPropsType = {
    onClick: () => void;
    title: string;
    isDisabled: boolean;
}

export const UniversalButton = ({onClick, title, isDisabled}: UniversalButtonPropsType) => {

    return (
        <ButtonStyled disabled={isDisabled} onClick={onClick} >{title}</ButtonStyled>
    );
};

const ButtonStyled = styled.button<{disabled: boolean}>`
    padding: 5px 40px;
    border: ${props => props.disabled ? "3px solid #A9A9A9" : "3px solid cornflowerblue"};
    border-radius: 10px;
    background-color: ${props => props.disabled ? "transparent" : "cornflowerblue"};
    color: ${props => props.disabled ? "#A9A9A9" : "azure"};
    cursor: ${props => props.disabled ? "not-allowed": "pointer"};
    font-size: 30px;
    flex-basis: auto;
    &:active{
        transform: ${props => props.disabled ? "none" : "scale(0.9)"};
    }
`