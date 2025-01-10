import React, {ChangeEvent, useEffect} from 'react';
import {Counter} from "../components/Counter";
import {Settings} from "../components/Settings";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MaterialUISwitch} from "../components/MUISwitchDarkMode";
import {RootState} from "./store";
import {
    setCountAC,
    setIsDisabledAC, setMaxSettingsAC,
    setMaxValueAC, setMessageAC, setStartSettingsAC,
    setStartValueAC, setThemeModeAC
} from "../model/app-reducer";
import {useAppDispatch, useAppSelector} from "./hooks";

export type ThemeMode = 'dark' | 'light'

export type CounterType = {
    startValue: number
    maxValue: number
    startSettings: number
    maxSettings: number
    count: number
    message: string
    isDisabled: boolean
    themeMode: ThemeMode
}

const selectCounter = (state: RootState): CounterType => state.counter

function App() {

    const {
        startValue,
        maxValue,
        startSettings,
        maxSettings,
        count,
        message,
        isDisabled,
        themeMode,
    } = useAppSelector(selectCounter);

    const dispatch = useAppDispatch()

    const counterAdd = () => {
        if (count < maxValue) {
            dispatch(setCountAC(count + 1))
        }
    }

    const counterReset = () => {
        dispatch(setCountAC(startValue))
    }

    const updateOnClick = () => {
        dispatch(setIsDisabledAC(true))
        dispatch(setStartValueAC(startSettings))
        dispatch(setMaxValueAC(maxSettings))
        dispatch(setMessageAC(""))
        dispatch(setCountAC(startSettings))
    }

    const updateOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value
        dispatch(setMaxSettingsAC(inputValue))
        dispatch(setIsDisabledAC(false))
    }

    const updateOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value ?? '0'
        dispatch(setStartSettingsAC(inputValue))
        dispatch(setIsDisabledAC(false))
    }

    const changeModeHandler = () => {
        const darkMode = themeMode === 'light' ? 'dark' : 'light'
        dispatch(setThemeModeAC(darkMode))
    }

    const numberInputErrorOne = startSettings >= maxSettings
    const numberInputErrorTwo = startSettings < 0

    const messageToggle = () => {
        numberInputErrorOne || numberInputErrorTwo ?
            dispatch(setMessageAC("Incorrect value!")) :
            dispatch(setMessageAC("Enter values and press 'set'"))
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

    const theme = createTheme({
        palette: {
            mode: themeMode === 'light' ? 'light' : 'dark',
            primary: {
                main: themeMode === 'light' ? '#66bb6a' : '#388e3c',
                contrastText: themeMode === 'light' ? '#000' : '#f5f5f5'
            },
            secondary: {
                main: themeMode === 'light' ? '#7986cb' : '#455a64',
                contrastText: themeMode === 'light' ? '#26a69a' : '#00695c'
            },
            background: {
                paper: themeMode === 'light' ? '#e0e0e0' : '#424242',
                default: themeMode === 'light' ? '#e0e0e0' : '#424242',
            },
            error: {
                main: '#f44336'
            }
        },
    })

    const styleContainer = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignContent: "center"
    }

    return (
        <ThemeProvider theme={theme}>
            <FormControlLabel control={<MaterialUISwitch onClick={changeModeHandler}/>}
                              label={`Dark mode ${themeMode === 'light' ? 'off' : 'on'}`}
                              sx={{m: '20px'}}/>
            <CssBaseline/>
            <Container fixed
                       color={'primary'}
                       sx={styleContainer}
            >
                <Grid container
                      spacing={5}
                      columns={2}
                      sx={{justifyContent: "center"}}
                >
                    <Settings updateOnClick={updateOnClick}
                              updateOnChangeMaxValue={updateOnChangeMaxValue}
                              updateOnChangeStartValue={updateOnChangeStartValue}
                              numberInputErrorOne={numberInputErrorOne}
                              numberInputErrorTwo={numberInputErrorTwo}
                              startSettings={startSettings}
                              maxSettings={maxSettings}
                              isDisabled={isDisabled}
                    />
                    <Counter counterAdd={counterAdd}
                             counterReset={counterReset}
                             count={count}
                             maxValue={maxValue}
                             message={message}
                    />
                </Grid>
            </Container>
        </ThemeProvider>
    );
}


export default App;
