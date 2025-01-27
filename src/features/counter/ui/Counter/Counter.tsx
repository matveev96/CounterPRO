import React from 'react';
import {Controllers} from "../../../../common/components/Controllers/Controllers";
import {Window} from "../../../../common/components/Window/Window";
import {Wrapper} from "../../../../common/components/Wrapper/Wrapper";
import {Button, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {setCountAC} from "../../model/app-reducer";
import {selectCounter} from "../../model/app-selectors";

export const Counter = () => {

    const {
        startValue,
        maxValue,
        count,
        message,
    } = useAppSelector(selectCounter);

    const dispatch = useAppDispatch()

    const counterAdd = () => {
        if (count < maxValue) {
            dispatch(setCountAC({newCount: count + 1}))
        }
    }

    const counterReset = () => {
        dispatch(setCountAC({newCount: startValue}))
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
                <Button onClick={counterAdd}
                        variant="contained"
                        size={'large'}
                        disabled={count === maxValue || message !== ""}
                >inc
                </Button>

                <Button onClick={counterReset}
                        variant="contained"
                        size={'large'}
                        disabled={message !== ""}
                >reset
                </Button>
            </Controllers>
        </Wrapper>
    );
};
