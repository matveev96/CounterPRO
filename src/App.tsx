import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MaterialUISwitch} from "./components/MUISwitchDarkMode";

type ThemeMode = 'dark' | 'light'


function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const [startSettings, setStartSettings] = useState(startValue)
    const [maxSettings, setMaxSettings] = useState(maxValue)

    const [message, setMessage] = useState("")
    const [count, setCount] = useState(startValue)
    const [isDisabled, setIsDisabled] = useState(false);

    const counterAdd = () => {
        if (count < maxValue) {
            setCount(prevState => prevState + 1)
        }
    }

    const counterReset = () => {
        setCount(startValue)
    }

    const updateDisabled = () => {
        setIsDisabled(true)
        localStorage.setItem("disabledButton", JSON.stringify(true));
    }

    const updateStartValue = (newValue: number) => {
        setStartValue(newValue)
        localStorage.setItem("startValue", JSON.stringify(newValue));
    }

    const updateMaxValue = (newValue: number) => {
        setMaxValue(newValue)
        localStorage.setItem("maxValue", JSON.stringify(newValue));
    }

    const updateOnClick = () => {
        updateStartValue(startSettings)
        updateMaxValue(maxSettings)
        updateMassage("")
        updateDisabled()
        setCount(startSettings)
    }

    const updateOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +(e.currentTarget.value)
        setMaxSettings(inputValue)
        setIsDisabled(false)
    }

    const updateOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value ?? '0'
        setStartSettings(inputValue)
        setIsDisabled(false)
    }

    const updateMassage = (newString: string) => {
        setMessage(newString)
    }

    useEffect(() => {
        const startValueToString = localStorage.getItem("startValue");
        if (startValueToString) {
            const startValueToObject = JSON.parse(startValueToString)
            setStartValue(startValueToObject)
            setStartSettings(startValueToObject)
            setCount(startValueToObject)
        }

        const maxValueToString = localStorage.getItem("maxValue");
        if (maxValueToString) {
            const maxValueToObject = JSON.parse(maxValueToString)
            setMaxValue(maxValueToObject)
            setMaxSettings(maxValueToObject)
        }

        const disabledButtonToString = localStorage.getItem("disabledButton");
        if (disabledButtonToString) {
            const disabledButtonToObject = JSON.parse(disabledButtonToString)
            setIsDisabled(disabledButtonToObject)
        }
    }, []);

    const numberInputErrorOne = startSettings >= maxSettings
    const numberInputErrorTwo = startSettings < 0

    const messageToggle = () => {
        numberInputErrorOne || numberInputErrorTwo ?
            updateMassage("Incorrect value!") :
            updateMassage("Enter values and press 'set'")
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

    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

    const changeModeHandler = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
    }

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

    return (
        <ThemeProvider theme={theme}>
            <FormControlLabel control={<MaterialUISwitch onClick={changeModeHandler}/>}
                              label={`Dark mode ${themeMode === 'light' ? 'off' : 'on'}`}
                              sx={{m: '20px'}}/>
            <CssBaseline/>
            <Container fixed
                       color={'primary'}
                       sx={{
                           position: 'absolute',
                           top: 0,
                           bottom: 0,
                           right: 0,
                           left: 0,
                           alignContent: "center"
                       }}
            >
                <Grid container
                      spacing={5}
                      columns={2}
                      sx={{
                          justifyContent: "center",
                      }}
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
