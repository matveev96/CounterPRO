import React from 'react';
import styled from "styled-components";
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {UniversalButton} from "./universal components/UniversalButton";

type CounterPropsType = {
    startValue: number,
    maxValue: number,
    message: string,
    counterReset: () => void,
    counterAdd: () => void,
}


export const Counter = ({startValue, maxValue, counterReset, counterAdd, message}: CounterPropsType) => {


    return (
        <Wrapper>
            <Window>
                <ViewBox value={startValue} maxValue={maxValue} message={message}>
                    <span>{message}</span>
                    <span>{startValue}</span>
                </ViewBox>
            </Window>

            <Controllers>
                <UniversalButton title={"inc"}
                                 onClick={counterAdd}
                                 isDisabled={startValue === maxValue || message !== ""}
                />
                <UniversalButton title={"reset"}
                                 onClick={counterReset}
                                 isDisabled={message !== ""}
                />
            </Controllers>
        </Wrapper>
    );
};


const ViewBox = styled.div<{ value: number, maxValue: number, message: string}>`
    font-weight: bold;
    span:first-of-type {
        font-size: 25px;
        color: ${props => props.message === "incorrect value" ? "#F08080" : 'cornflowerblue'} ;
    }
    span:last-of-type {
        font-size: 80px;
        color: ${props => props.value === props.maxValue ? "#F08080" : 'cornflowerblue'};
        display: ${props => props.message ? 'none' : 'inline'};
    }
    
`


