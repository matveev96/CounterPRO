import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {UniversalButton} from "./universal components/UniversalButton";
import {ValueType} from "../App";

type CounterPropsType = {
    objectValue: ValueType
}


export const Counter = ({objectValue}: CounterPropsType) => {


    const [count, setCount] = useState<number>(objectValue.startValue)


    useEffect(() => {
        const valueToString = localStorage.getItem("counter");
        if (valueToString) {
            const valueToNum = JSON.parse(valueToString)
            setCount(valueToNum)

        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count));
    }, [count]);



    const counterAdd = () => {
        if(count < objectValue.maxValue) {
            setCount(count + 1)
            console.log(count)
        }
    }

    const counterReset = () => {
        setCount(objectValue.startValue)
    }

    return (
        <Wrapper>
            <Window>
                <WindowNumber value={count} maxValue={objectValue.maxValue}>{count}</WindowNumber>
            </Window>

            <Controllers>
                <UniversalButton title={"inc"}
                                 onClick={counterAdd}
                                 isDisabled={count === objectValue.maxValue}/>
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


