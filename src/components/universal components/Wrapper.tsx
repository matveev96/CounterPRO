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
    width: 500px;
    height: 500px;
    margin: 50px;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`