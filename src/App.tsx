import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [startSettings, setStartSettings] = useState<number>(startValue)
    const [maxSettings, setMaxSettings] = useState<number>(maxValue)

    const [message, setMessage] = useState<string>("")
    const [count, setCount] = useState<number>(startValue)
    const [isDisabled, setIsDisabled] = useState(false);

    const counterAdd = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(startValue)
    }

    const updateDisabled = () => {
        setIsDisabled(true)
        localStorage.setItem("disabledButton", JSON.stringify(true));
    }

    const updateStartValue = (newValue: number) => {
        setStartValue(newValue)
        localStorage.setItem("startValue", JSON.stringify(newValue));
    }
    const updateMaxValue = (newValue: number) => {
        setMaxValue(newValue)
        localStorage.setItem("maxValue", JSON.stringify(newValue));
    }

    const updateOnClick = () => {
        updateStartValue(startSettings)
        setCount(startSettings)
        updateMaxValue(maxSettings)
        updateMassage("")
        updateDisabled()
    }

    const updateOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +(e.currentTarget.value)
        setMaxSettings(inputValue)
        setIsDisabled(false)
    }

    const updateOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +(e.currentTarget.value)
        setStartSettings(inputValue)
        setIsDisabled(false)
    }

    const updateMassage = (newString: string) => {
        setMessage(newString)
    }

    useEffect(() => {
        const startValueToString = localStorage.getItem("startValue");
        if (startValueToString) {
            const startValueToObject = JSON.parse(startValueToString)
            setStartValue(startValueToObject)
            setStartSettings(startValueToObject)
            setCount(startValueToObject)
        }

        const maxValueToString = localStorage.getItem("maxValue");
        if (maxValueToString) {
            const maxValueToObject = JSON.parse(maxValueToString)
            setMaxValue(maxValueToObject)
            setMaxSettings(maxValueToObject)
        }
        const disabledButtonToString = localStorage.getItem("disabledButton");
        if (disabledButtonToString) {
            const disabledButtonToObject = JSON.parse(disabledButtonToString)
            setIsDisabled(disabledButtonToObject)
        }
    }, []);

    const numberInputErrorOne = startSettings >= maxSettings
    const numberInputErrorTwo = startSettings < 0

    const messageToggle = () => {
        numberInputErrorOne || numberInputErrorTwo ?
            updateMassage("Incorrect value!") :
            updateMassage("Enter values and press 'set'")
    }

    useEffect(() => {
        if (startSettings !== startValue ) {
            messageToggle()
        }
    }, [startSettings]);

    useEffect(() => {
        if (maxSettings !== maxValue) {
            messageToggle()
        }
    }, [maxSettings]);

    return (
        <AppStyled>
            <Settings updateOnClick={updateOnClick}
                      updateOnChangeMaxValue={updateOnChangeMaxValue}
                      updateOnChangeStartValue={updateOnChangeStartValue}
                      numberInputErrorOne={numberInputErrorOne}
                      numberInputErrorTwo={numberInputErrorTwo}
                      startSettings={startSettings}
                      maxSettings={maxSettings}
                      isDisabled={isDisabled}
            />
            <Counter counterAdd={counterAdd}
                     counterReset={counterReset}
                     count={count}
                     maxValue={maxValue}
                     message={message}
            />
        </AppStyled>
    );
}

const AppStyled = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: dimgrey;
`

export default App;
