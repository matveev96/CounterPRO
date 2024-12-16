import React, {useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

export type ValueType = {
    startValue: number,
    maxValue: number
}

function App() {

    const [value, setValue] = useState<ValueType>({"startValue": 0, "maxValue": 5})
    const [message, setMessage] = useState<string>("")

    const updateValue = (newValue: ValueType) => {
        setValue({...value, startValue: newValue.startValue, maxValue: newValue.maxValue})
    }

    const updateMassage = (newString: string) => {
        setMessage(newString)
    }

    useEffect(() => {
        let valueToString = localStorage.getItem("counterValue");
        if (valueToString) {
            const valueToObject = JSON.parse(valueToString)
            setValue(valueToObject)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value));
    }, [value]);

    return (
        <AppStyled>
            <Settings updateValue={updateValue}
                      updateMassage={updateMassage}
                      value={value}
            />
            <Counter startValue={value.startValue}
                     maxValue={value.maxValue}
                     message={message}
            />

        </AppStyled>
    );
}

const AppStyled = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
    background-color: dimgrey;
`

export default App;
