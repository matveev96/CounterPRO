import React, {ChangeEvent, useEffect, useState} from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {UniversalButton} from "./universal components/UniversalButton";
import styled from "styled-components";
import {ValueType} from "../App";

type SettingsType = {
    updateValue: (newValue: ValueType) => void
    updateMassage: (newString: string) => void
    value: ValueType
}

export const Settings = ({updateValue, value, updateMassage}: SettingsType) => {

    const [settings, setSettings] = useState<ValueType>(value)
    const [isDisabled, setIsDisabled] = useState(false);

    // После перезагрузки страницы данные из localStorage попадают в setValue компоненты App.
    // Чтобы эти данные отобразились в setSettings использую useEffect
    useEffect(() => {
        if (value) {
            setSettings(value)
        }
    }, [value]);

    useEffect(() => {
        if (settings !== value) {
            settings.startValue >= settings.maxValue || settings.startValue < 0 ?
                updateMassage("Incorrect value!") :
                updateMassage("Enter values and press 'set'")
        }
    }, [settings]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>, inputName: string) => {
        let inputValue = JSON.parse(e.currentTarget.value)
        setSettings(prevState => ({...prevState, [inputName]: inputValue}))
        setIsDisabled(false)
    }

    const onClickHandler = () => {
        updateValue(settings)
        updateMassage("")
        setIsDisabled(true)
    }

    return (
        <Wrapper>
            <Window>
                <ValueWrapper>
                    <LabelStyled>
                        max value:
                        <InputStyled type="number"
                                     value={settings.maxValue}
                                     error={settings.startValue >= settings.maxValue}
                                     onChange={(e) => changeHandler(e, "maxValue")}/>
                    </LabelStyled>
                    <LabelStyled>
                        start value:
                        <InputStyled type="number"
                                     value={settings.startValue}
                                     error={settings.startValue >= settings.maxValue || settings.startValue < 0}
                                     onChange={(e) => changeHandler(e, "startValue")}/>
                    </LabelStyled>
                </ValueWrapper>
            </Window>
            <Controllers>
                <UniversalButton title={"set"} onClick={onClickHandler}
                                 isDisabled={ settings.startValue >= settings.maxValue ||
                                     settings.startValue < 0 ||
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
    align-items: center;
    justify-content: space-between;
    gap: 40px;
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

