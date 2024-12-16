import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {UniversalButton} from "./universal components/UniversalButton";

type CounterPropsType = {
    startValue: number,
    maxValue: number,
    message: string,
    // counterReset: () => void,
    // counterAdd: () => void,
}


export const Counter = ({startValue, maxValue, message}: CounterPropsType) => {
    const [count, setCount] = useState<number>(startValue)

    useEffect(() => {
        if (startValue) {
            setCount(startValue)
        }
    }, [startValue]);

    const counterAdd = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(startValue)
    }

    return (
        <Wrapper>
            <Window>
                <ViewBox value={count} maxValue={maxValue} message={message}>
                    <span>{message}</span>
                    <span>{count}</span>
                </ViewBox>
            </Window>

            <Controllers>
                <UniversalButton title={"inc"}
                                 onClick={counterAdd}
                                 isDisabled={count === maxValue || message !== ""}
                />
                <UniversalButton title={"reset"}
                                 onClick={counterReset}
                                 isDisabled={message !== ""}
                />
            </Controllers>
        </Wrapper>
    );
};


const ViewBox = styled.div<{ value: number, maxValue: number, message: string }>`
    font-weight: bold;

    span:first-of-type {
        font-size: 25px;
        color: ${props => props.message === "Incorrect value!" ? "#F08080" : 'cornflowerblue'};
    }

    span:last-of-type {
        font-size: ${props => props.value === props.maxValue ? "80px" : '60px'};
        color: ${props => props.value === props.maxValue ? "#F08080" : 'cornflowerblue'};
        display: ${props => props.message ? 'none' : 'inline'};
    }

`


