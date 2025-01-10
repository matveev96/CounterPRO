import {CounterType, ThemeMode} from "../app/AppWithRedux";

const initialState: CounterType = {
    startValue: 0,
    maxValue: 5,
    startSettings: 0,
    maxSettings: 5,
    count: 0,
    message: '',
    isDisabled: false,
    themeMode: 'light'
}

export const appReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case "SET_START_VALUE": {
            return {
                ...state,
                startValue: action.payload.newValue,
            }
        }
        case "SET_START_SETTINGS": {
            return {
                ...state,
                startSettings: action.payload.newValue,
            }
        }
        case "SET_MAX_VALUE": {
            return {
                ...state,
                maxValue: action.payload.newMaxValue,
            }
        }
        case "SET_MAX_SETTINGS": {
            return {
                ...state,
                maxSettings: action.payload.newMaxValue
            }
        }
        case "SET_COUNT": {
            return {
                ...state,
                count: action.payload.newCount
            }
        }
        case "SET_MESSAGE": {
            return {
                ...state,
                message: action.payload.newString
            }
        }
        case "SET_IS_DISABLED": {
            return {
                ...state,
                isDisabled: action.payload.bool
            }
        }
        case "SET_THEME_MODE": {
            return {
                ...state,
                themeMode: action.payload.darkMode
            }
        }
        default:
            return state
    }
}

export const setStartValueAC = (newValue: number) => {
    return (
        {
            type: 'SET_START_VALUE',
            payload: {
                newValue
            }
        } as const)
}
export const setStartSettingsAC = (newValue: number) => {
    return (
        {
            type: 'SET_START_SETTINGS',
            payload: {
                newValue
            }
        } as const)
}
export const setMaxValueAC = (newMaxValue: number) => {
    return (
        {
            type: 'SET_MAX_VALUE',
            payload: {
                newMaxValue
            }
        } as const)
}
export const setMaxSettingsAC = (newMaxValue: number) => {
    return (
        {
            type: 'SET_MAX_SETTINGS',
            payload: {
                newMaxValue
            }
        } as const)
}
export const setCountAC = (newCount: number) => {
    return (
        {
            type: 'SET_COUNT',
            payload: {
                newCount
            }
        } as const)
}
export const setMessageAC = (newString: string) => {
    return (
        {
            type: 'SET_MESSAGE',
            payload: {
                newString
            }
        } as const)
}
export const setIsDisabledAC = (bool: boolean) => {
    return (
        {
            type: 'SET_IS_DISABLED',
            payload: {
                bool
            }
        } as const)
}
export const setThemeModeAC = (darkMode: ThemeMode) => {
    return (
        {
            type: 'SET_THEME_MODE',
            payload: {
                darkMode
            }
        } as const)
}

type setStartValueAT = ReturnType<typeof setStartValueAC>
type setStartSettingsAT = ReturnType<typeof setStartSettingsAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setMaxSettingsAT = ReturnType<typeof setMaxSettingsAC>
type setMessageAT = ReturnType<typeof setMessageAC>
type setIsDisabledAT = ReturnType<typeof setIsDisabledAC>
type setThemeModeAT = ReturnType<typeof setThemeModeAC>
type setCountAT = ReturnType<typeof setCountAC>

type ActionType =
    setStartValueAT
    | setStartSettingsAT
    | setMaxValueAT
    | setMaxSettingsAT
    | setMessageAT
    | setIsDisabledAT
    | setThemeModeAT
    | setCountAT
