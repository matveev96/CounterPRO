import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {UniversalButton} from "./universal components/UniversalButton";

export const Counter = () => {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    let randomNum = Math.floor(Math.random() * (max - min) + min)

    const [count, setCount] = useState<number>(0)
    const randomRef =useRef<number>(randomNum)

    useEffect(() => {
        const valueToString = localStorage.getItem("counter");
        if (valueToString) {
            const valueToNum = JSON.parse(valueToString)
            setCount(valueToNum)
            randomNum = valueToNum
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count));
    }, [count]);

    const currentRandomValue = randomRef.current;

    const counterAdd = () => {
        if(count < currentRandomValue) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(0)
        randomRef.current = randomNum
    }

    return (
        <Wrapper>

            <Window>
                <WindowNumber value={count} maxValue={currentRandomValue}>{count}</WindowNumber>
            </Window>

            <Controllers>
                <UniversalButton title={"inc"}
                                 onClick={counterAdd}
                                 isDisabled={count === currentRandomValue}/>
                <UniversalButton title={"reset"}
                                 onClick={counterReset}
                                 isDisabled={count === 0}/>
            </Controllers>
        </Wrapper>
    );
};


const WindowNumber = styled.span<{ value: number, maxValue: number }>`
    font-size: 80px;
    color: ${props => props.value === props.maxValue ? 'red' : 'cornflowerblue'};
`


