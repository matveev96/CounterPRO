import React, {ReactNode} from 'react';
import styled from "styled-components";

type ButtonsProps = {
    children: React.ReactNode;
}

export const Controllers = (props: ButtonsProps) => {
    return (
        <ControllersStyled>
            {props.children}
        </ControllersStyled>
    );
};

const ControllersStyled = styled.div`
    margin: 20px 0;
    width: 80%;
    height: 30%;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

