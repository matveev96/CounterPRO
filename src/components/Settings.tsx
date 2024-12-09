import React from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {UniversalButton} from "./universal components/UniversalButton";
import styled from "styled-components";

export const Settings = () => {
    return (
            <Wrapper>
                <Window>
                    <ValueWrapper>
                        <LabelStyled>
                            max value:
                            <InputStyled type="number"/>
                        </LabelStyled>
                        <LabelStyled>
                            start value:
                            <InputStyled type="number"/>
                        </LabelStyled>
                    </ValueWrapper>
                </Window>
                <Controllers>
                    <UniversalButton title={"set"} onClick={()=>{}} isDisabled={false}/>
                </Controllers>
            </Wrapper>
    );
};

const LabelStyled = styled.label`
    font-size: 30px;
    font-weight: bold;
    color: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    
`

const InputStyled = styled.input`
    font-size: 20px;
    font-weight: bold;
    color: cornflowerblue;
    width: 110px;
    height: 30px;
    text-align: center;
    border:2px solid cornflowerblue;
    border-radius: 5px;
`

const ValueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

