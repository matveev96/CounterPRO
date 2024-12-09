import React from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {Wrapper} from "./components/universal components/Wrapper";
import {Settings} from "./components/Settings";

function App() {

    return (
        <AppStyled>
            <Counter/>
            <Settings/>
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
