import React from 'react';
import styled from "styled-components";

type WrapperPropsType = {
    children: React.ReactNode;
}

export const Wrapper = (props: WrapperPropsType) => {
    return (
        <WrapperStyled>
            {props.children}
        </WrapperStyled>
    );
};

const WrapperStyled = styled.div`
    width: 30vw;
    height: 60vh;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`