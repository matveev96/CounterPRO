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
    margin: 20px 0;
    width: 40%;
    height: 30%;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    background-color: ${props => props.disabled ? "transparent" : "cornflowerblue"};
    color: azure;
    cursor: ${props => props.disabled ? "not-allowed": "pointer"};
    font-size: 30px;
`