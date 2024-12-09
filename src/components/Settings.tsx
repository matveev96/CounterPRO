import React, {ChangeEvent, useEffect, useState} from 'react';
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


    const [settings, setSettings] = useState<ValueType>({"startValue": 0, "maxValue": 5})

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

    const changeValueHandler = (e:ChangeEvent<HTMLInputElement>, inputValue: string) => {
        setSettings({...settings, [inputValue]: +(e.currentTarget.value)})
    }

    let error = false;
    if(settings.startValue >= settings.maxValue) {
        error = true
    }

    const onClickHandler = () => {
        setValue(settings)

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
                                         onChange={(e:ChangeEvent<HTMLInputElement>) => changeValueHandler( e, "maxValue")}/>
                        </LabelStyled>
                        <LabelStyled>
                            start value:
                            <InputStyled type="number"
                                         value={settings.startValue}
                                         error={error || settings.startValue < 0}
                                         onChange={(e:ChangeEvent<HTMLInputElement>) => changeValueHandler( e, "startValue")}/>
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

