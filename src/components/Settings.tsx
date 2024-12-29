import React, {ChangeEvent} from 'react';
import {Wrapper} from "./universal components/Wrapper";
import {Window} from "./universal components/Window";
import {Controllers} from "./universal components/Controllers";
import {Button, TextField} from "@mui/material";

type SettingsType = {
    updateOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateOnClick: () => void
    numberInputErrorOne: boolean
    numberInputErrorTwo: boolean
    startSettings: number
    maxSettings: number
    isDisabled: boolean
}

export const Settings = ({updateOnClick, startSettings, maxSettings, updateOnChangeMaxValue, updateOnChangeStartValue, numberInputErrorOne, numberInputErrorTwo, isDisabled}: SettingsType) => {

    const onClickHandler = () => {
        updateOnClick()
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateOnChangeMaxValue(e)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateOnChangeStartValue(e)
    }

    return (
        <Wrapper>
            <Window>
                <TextField type="number"
                           label={'Max value:'}
                           value={maxSettings}
                           variant="outlined"
                           margin="normal"
                           error={numberInputErrorOne}
                           onChange={onChangeMaxValueHandler}
                />
                <TextField type="number"
                           label={'Start value:'}
                           variant="outlined"
                           margin="normal"
                           value={startSettings}
                           error={numberInputErrorOne || numberInputErrorTwo}
                           onChange={onChangeStartValueHandler}
                />
            </Window>
            <Controllers>
                <Button onClick={onClickHandler}
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
