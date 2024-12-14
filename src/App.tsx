import React, {useState} from 'react';
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
    const [count, setCount] = useState<number>(value.startValue)

    const updateValue = (newValue: ValueType) => {
        setValue({...value, startValue: newValue.startValue, maxValue: newValue.maxValue})
    }

    const updateCount = (newStart: number) => {
        setCount(newStart)
    }

    const counterAdd = () => {
        if(count < value.maxValue) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(value.startValue)
    }

    return (
        <AppStyled>
            <Settings updateValue={updateValue} updateCount={updateCount} value={value}/>
            <Counter startValue={count}
                     maxValue={value.maxValue}
                     counterAdd={counterAdd}
                     counterReset={counterReset}/>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: dimgrey;
`

export default App;
