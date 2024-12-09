import React from 'react';
import styled from "styled-components";

type WindowProps = {
    children: React.ReactNode;
}

export const Window = (props: WindowProps) => {
    return (
        <WindowStyled>
            {props.children}
        </WindowStyled>
    );
};

const WindowStyled = styled.div`
    margin-top: 20px;
    width: 80%;
    height: 50%;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    background-color: aqua;
    color: black;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`





