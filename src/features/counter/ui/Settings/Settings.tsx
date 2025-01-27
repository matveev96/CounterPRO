import React, {ChangeEvent, useEffect} from 'react';
import {Wrapper} from "../../../../common/components/Wrapper/Wrapper";
import {Window} from "../../../../common/components/Window/Window";
import {Controllers} from "../../../../common/components/Controllers/Controllers";
import {Button, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {selectCounter} from "../../model/app-selectors";
import {
    setCountAC,
    setIsDisabledAC,
    setMaxSettingsAC,
    setMaxValueAC,
    setMessageAC, setStartSettingsAC,
    setStartValueAC
} from "../../model/counter-reducer";

export const Settings = () => {

    const {
        startValue,
        maxValue,
        startSettings,
        maxSettings,
        isDisabled,
    } = useAppSelector(selectCounter);

    const dispatch = useAppDispatch()

    const updateOnClick = () => {
        dispatch(setIsDisabledAC({bool: true}))
        dispatch(setStartValueAC({newValue: startSettings}))
        dispatch(setMaxValueAC({newMaxValue: maxSettings}))
        dispatch(setMessageAC({newString: ""}))
        dispatch(setCountAC({newCount: startSettings}))
    }

    const updateOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value
        dispatch(setMaxSettingsAC({newMaxValue: inputValue}))
        dispatch(setIsDisabledAC({bool: false}))
    }

    const updateOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value ?? '0'
        dispatch(setStartSettingsAC({newValue: inputValue}))
        dispatch(setIsDisabledAC({bool: false}))
    }

    const numberInputErrorOne = startSettings >= maxSettings
    const numberInputErrorTwo = startSettings < 0

    const messageToggle = () => {
        numberInputErrorOne || numberInputErrorTwo ?
            dispatch(setMessageAC({newString: "Incorrect value!"})) :
            dispatch(setMessageAC({newString: "Enter values and press 'set'"}))
    }

    useEffect(() => {
        if (startSettings !== startValue) {
            messageToggle()
        }
    }, [startSettings]);

    useEffect(() => {
        if (maxSettings !== maxValue) {
            messageToggle()
        }
    }, [maxSettings]);

    return (
        <Wrapper>
            <Window>
                <TextField type="number"
                           label={'Max value:'}
                           value={maxSettings}
                           variant="outlined"
                           margin="normal"
                           error={numberInputErrorOne}
                           onChange={updateOnChangeMaxValue}
                />
                <TextField type="number"
                           label={'Start value:'}
                           variant="outlined"
                           margin="normal"
                           value={startSettings}
                           error={numberInputErrorOne || numberInputErrorTwo}
                           onChange={updateOnChangeStartValue}
                />
            </Window>
            <Controllers>
                <Button onClick={updateOnClick}
                        variant="contained"
                        size={'large'}
                        disabled={numberInputErrorOne ||
                            numberInputErrorTwo ||
                            isDisabled}
                >set
                </Button>
            </Controllers>
        </Wrapper>
    );
};
