import React, {ChangeEvent} from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {UniversalButton} from "./universal components/UniversalButton";
import styled from "styled-components";

type SettingsType = {
    updateOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateOnClick: () => void
    numberInputErrorOne: boolean
    numberInputErrorTwo: boolean
    startSettings: number
    maxSettings: number
    isDisabled: boolean
}

export const Settings = ({updateOnClick, startSettings, maxSettings, updateOnChangeMaxValue, updateOnChangeStartValue, numberInputErrorOne, numberInputErrorTwo, isDisabled}: SettingsType) => {

    const onClickHandler = () => {
        updateOnClick()
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateOnChangeMaxValue(e)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateOnChangeStartValue(e)
    }

    return (
        <Wrapper>
            <Window>
                <ValueWrapper>
                    <LabelStyled>
                        max value:
                        <InputStyled type="number"
                                     value={maxSettings}
                                     error={numberInputErrorOne}
                                     onChange={onChangeMaxValueHandler}/>
                    </LabelStyled>
                    <LabelStyled>
                        start value:
                        <InputStyled type="number"
                                     value={startSettings}
                                     error={numberInputErrorOne || numberInputErrorTwo}
                                     onChange={onChangeStartValueHandler}/>
                    </LabelStyled>
                </ValueWrapper>
            </Window>
            <Controllers>
                <UniversalButton title={"set"}
                                 onClick={onClickHandler}
                                 isDisabled={ numberInputErrorOne ||
                                     numberInputErrorTwo ||
                                     isDisabled }
                />
            </Controllers>
        </Wrapper>
    );
};

const LabelStyled = styled.label`
    font-size: 30px;
    font-weight: bold;
    color: cornflowerblue;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`

const InputStyled = styled.input<{ error: boolean }>`
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

