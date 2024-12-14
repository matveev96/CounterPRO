import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {UniversalButton} from "./universal components/UniversalButton";
import {ValueType} from "../App";

type CounterPropsType = {
    // objectValue: ValueType
    // updateCounter: () => void
    startValue: number,
    maxValue: number
    counterReset: () => void
    counterAdd: () => void
}


export const Counter = ({startValue, maxValue, counterReset, counterAdd}: CounterPropsType) => {

    return (
        <Wrapper>
            <Window>
                <WindowNumber value={startValue} maxValue={maxValue}>{startValue}</WindowNumber>
            </Window>

            <Controllers>
                <UniversalButton title={"inc"}
                                 onClick={counterAdd}
                                 isDisabled={startValue === maxValue}/>
                <UniversalButton title={"reset"}
                                 onClick={counterReset}
                                 isDisabled={startValue === 0}/>
            </Controllers>
        </Wrapper>
    );
};


const WindowNumber = styled.span<{ value: number, maxValue: number }>`
    font-size: 80px;
    color: ${props => props.value === props.maxValue ? 'red' : 'cornflowerblue'};
`


