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
    const [value, setValue] = useState<ValueType>({"startValue": 0, "maxValue": 1})
    console.log(value)

    return (
        <AppStyled>
            <Settings value={value} setValue={setValue}/>
            <Counter objectValue={value}/>
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
