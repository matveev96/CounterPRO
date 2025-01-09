import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
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
    setAddCounterAC,
    setIsDisabledAC, setMaxSettingsAC,
    setMaxValueAC, setMessageAC,
    setResetCounterAC, setStartSettingsAC,
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

    // const [startValue, setStartValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    //
    // const [startSettings, setStartSettings] = useState(startValue)
    // const [maxSettings, setMaxSettings] = useState(maxValue)
    //
    // const [message, setMessage] = useState("")
    // const [count, setCount] = useState(startValue)
    // const [isDisabled, setIsDisabled] = useState(false);
    //
    // const [themeMode, setThemeMode] = useState<ThemeMode>('light')

    const counterAdd = () => {
        if (count < maxValue) {
            // setCount(prevState => prevState + 1)
            dispatch(setAddCounterAC())
        }
    }

    const counterReset = () => {
        // setCount(startValue)
        dispatch(setResetCounterAC())
    }

    const updateDisabled = () => {
        // setIsDisabled(true)
        dispatch(setIsDisabledAC(true))
        localStorage.setItem("disabledButton", JSON.stringify(true));
    }

    const updateStartValue = (newValue: number) => {
        // setStartValue(newValue)
        dispatch(setStartValueAC(newValue))
        localStorage.setItem("startValue", JSON.stringify(newValue));

    }

    const updateMaxValue = (newValue: number) => {
        // setMaxValue(newValue)
        dispatch(setMaxValueAC(newValue))
        localStorage.setItem("maxValue", JSON.stringify(newValue));
    }

    const updateOnClick = () => {
        updateStartValue(startSettings)
        updateMaxValue(maxSettings)
        updateMassage("")
        updateDisabled()
        // setCount(startSettings)
    }

    const updateOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value
        // setMaxSettings(inputValue)
        // setIsDisabled(false)
        dispatch(setMaxSettingsAC(inputValue))
        dispatch(setIsDisabledAC(false))
    }

    const updateOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value ?? '0'
        // setStartSettings(inputValue)
        // setIsDisabled(false)
        dispatch(setStartSettingsAC(inputValue))
        dispatch(setIsDisabledAC(false))
    }

    const updateMassage = (newString: string) => {
        // setMessage(newString)
        dispatch(setMessageAC(newString))
    }

    const changeModeHandler = () => {
        const darkMode = themeMode === 'light' ? 'dark' : 'light'
        localStorage.setItem("themeMode", JSON.stringify(darkMode));
        dispatch(setThemeModeAC(darkMode))
    }

    useEffect(() => {
        const startValueToString = localStorage.getItem("startValue");
        if (startValueToString) {
            const startValueToObject = JSON.parse(startValueToString)
            // setStartValue(startValueToObject)
            // setStartSettings(startValueToObject)
            // setCount(startValueToObject)
            dispatch(setStartValueAC(startValueToObject))
        }

        const maxValueToString = localStorage.getItem("maxValue");
        if (maxValueToString) {
            const maxValueToObject = JSON.parse(maxValueToString)
            dispatch(setMaxValueAC(maxValueToObject))
            // setMaxValue(maxValueToObject)
            // setMaxSettings(maxValueToObject)
        }

        const disabledButtonToString = localStorage.getItem("disabledButton");
        if (disabledButtonToString) {
            const disabledButtonToObject = JSON.parse(disabledButtonToString)
            dispatch(setIsDisabledAC(disabledButtonToObject))
            // setIsDisabled(disabledButtonToObject)
        }

        const themeModeToString = localStorage.getItem("themeMode");
        if (themeModeToString) {
            const themeModeToObject = JSON.parse(themeModeToString)
            dispatch(setThemeModeAC(themeModeToObject))
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
