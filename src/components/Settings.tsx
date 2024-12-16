import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {UniversalButton} from "./universal components/UniversalButton";
import styled from "styled-components";
import {ValueType} from "../App";

type SettingsType = {
    // message: string
    updateValue: (newValue: ValueType) => void
    updateCount: (newStart: number) => void
    updateMassage: (newString: string) => void
    value: ValueType
    // setMessage: (message:string) => void
}

export const Settings = ({updateValue, value, updateCount, updateMassage}: SettingsType) => {


    const [settings, setSettings] = useState<ValueType>(value)

    // useEffect(() => {
    //     const valueToString = localStorage.getItem("settings");
    //     if (valueToString) {
    //         const valueToNum = JSON.parse(valueToString)
    //         setSettings(valueToNum)
    //
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem("settings", JSON.stringify(settings));
    // }, [settings]);

    let error = false;
    // let message = ""

    if (settings.startValue >= settings.maxValue) {
        error = true
        // message = "incorrect value"
        // updateMassage("incorrect value")
    } else {
        // message = "enter values and press 'set'"
        // updateMassage("enter values and press 'set'")
    }


    const changeHandler = (e: ChangeEvent<HTMLInputElement>, inputValue: string) => {
        let currentVal = +(e.currentTarget.value)
        setSettings(prevState => ({...prevState, [inputValue]: currentVal}))
        // updateMassage(message)
    }

    useEffect(() => {
        if (settings !== value) {
            settings.startValue >= settings.maxValue ? updateMassage("incorrect value") : updateMassage("enter values and press 'set'")
        }
    }, [settings]); // Зависимость: срабатывает, когда `state` изменяется


    const onClickHandler = () => {
        updateValue(settings)
        updateCount(settings.startValue)
        updateMassage("")
    }

    return (
        <Wrapper>
            <Window>
                <ValueWrapper>
                    <LabelStyled>
                        max value:
                        <InputStyled type="number"
                                     value={settings.maxValue}
                                     error={error}
                                     onChange={(e) => changeHandler(e, "maxValue")}/>
                    </LabelStyled>
                    <LabelStyled>
                        start value:
                        <InputStyled type="number"
                                     value={settings.startValue}
                                     error={error || settings.startValue < 0}
                                     onChange={(e) => changeHandler(e, "startValue")}/>
                    </LabelStyled>
                </ValueWrapper>
            </Window>
            <Controllers>
                <UniversalButton title={"set"} onClick={onClickHandler} isDisabled={error || settings.startValue < 0}/>
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

