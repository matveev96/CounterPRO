import React from 'react';
import {Controllers} from "./universal components/Controllers";
import {Window} from "./universal components/Window";
import {Wrapper} from "./universal components/Wrapper";
import {Button, Typography} from "@mui/material";

type CounterPropsType = {
    counterAdd: () => void,
    counterReset: () => void,
    count: number
    message: string,
    maxValue: number
}


export const Counter = ({counterAdd, counterReset, message, count, maxValue}: CounterPropsType) => {

    const counterAddHandler = () => {
        counterAdd()
    }

    const counterResetHander = () => {
        counterReset()
    }

    const styleMessage = {
        fontSize: '30px',
        fontWeight: 'bold'
    }
    const styleCount = {
        fontSize: '50px',
        fontWeight: 'bold'
    }

    return (
        <Wrapper>
            <Window>
                    <Typography sx={styleMessage}
                                color={message === "Incorrect value!" ? 'error.main' : 'primary.main'}
                    >{message}
                    </Typography>

                    {!message ?
                        <Typography sx={styleCount}
                                    color={count === maxValue ? "primary.main" : 'primary.contrastText'}>{count}</Typography> :
                        ''
                    }
            </Window>

            <Controllers>
                <Button onClick={counterAddHandler}
                        variant="contained"
                        size={'large'}
                        disabled={count === maxValue || message !== ""}
                >inc
                </Button>

                <Button onClick={counterResetHander}
                        variant="contained"
                        size={'large'}
                        disabled={message !== ""}
                >reset
                </Button>
            </Controllers>
        </Wrapper>
    );
};
