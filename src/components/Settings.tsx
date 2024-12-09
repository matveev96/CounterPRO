import React, {ChangeEvent, useState} from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {UniversalButton} from "./universal components/UniversalButton";
import styled from "styled-components";
import {ValueType} from "../App";

type SettingsType = {
    value: ValueType
    setValue: (value: ValueType) => void
}

export const Settings = ({value, setValue}: SettingsType) => {


    const changeValueHandler = (e:ChangeEvent<HTMLInputElement>, inputValue: string) => {
        setValue({...value, [inputValue]: +(e.currentTarget.value)})
    }

    let error = false;
    if(value.startValue >= value.maxValue) {
        error = true
    }

    const onClickHandler = () => {

    }

    return (
            <Wrapper>
                <Window>
                    <ValueWrapper>
                        <LabelStyled>
                            max value:
                            <InputStyled type="number"
                                         value={value.maxValue}
                                         error={error}
                                         onChange={(e:ChangeEvent<HTMLInputElement>) => changeValueHandler( e, "maxValue")}/>
                        </LabelStyled>
                        <LabelStyled>
                            start value:
                            <InputStyled type="number"
                                         value={value.startValue}
                                         error={error || value.startValue < 0}
                                         onChange={(e:ChangeEvent<HTMLInputElement>) => changeValueHandler( e, "startValue")}/>
                        </LabelStyled>
                    </ValueWrapper>
                </Window>
                <Controllers>
                    <UniversalButton title={"set"} onClick={onClickHandler} isDisabled={error || value.startValue < 0}/>
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

const InputStyled = styled.input<{error: boolean}>`
    font-size: 20px;
    font-weight: bold;
    color: cornflowerblue;
    width: 110px;
    height: 30px;
    text-align: center;
    border: 2px solid ${props => props.error ? "#F08080" : "cornflowerblue"};
    background-color: ${props => props.error ? "#FFC0CB" : "#FFFAF0"};
    border-radius: 5px;
    outline: none;
`

const ValueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

