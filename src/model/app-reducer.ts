import {CounterType} from "../app/AppWithRedux";

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
            const newValue = action.payload.newValue
            return {
                ...state,
                startValue: newValue,
                startSettings: newValue,
                count: newValue
            }
        }
        case "SET_START_SETTINGS": {
            const newValue = action.payload.newValue
            return {
                ...state,
                startSettings: newValue,
            }
        }
        case "SET_MAX_VALUE": {
            const newValue = action.payload.newMaxValue
            return {
                ...state,
                maxValue: newValue,
                maxSettings: newValue
            }
        }
        case "SET_MAX_SETTINGS": {
            const newValue = action.payload.newMaxValue
            return {
                ...state,
                maxSettings: newValue
            }
        }
        case "SET_RESET_COUNT": {
            return {
                ...state,
                count: state.startValue
            }
        }
        case "SET_ADD_COUNT": {
            return {
                ...state,
                count: state.count + 1
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
                themeMode: state.themeMode === 'light' ? 'dark' : 'light'
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

export const setResetCounterAC = () => {
    return (
        {
            type: 'SET_RESET_COUNT'
        } as const)
}

export const setAddCounterAC = () => {
    return (
        {
            type: 'SET_ADD_COUNT'
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

export const setThemeModeAC = () => {
    return (
        {
            type: 'SET_THEME_MODE'
        } as const)
}


type setStartValueAT = ReturnType<typeof setStartValueAC>
type setStartSettingsAT = ReturnType<typeof setStartSettingsAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setMaxSettingsAT = ReturnType<typeof setMaxSettingsAC>
type setResetCounterAT = ReturnType<typeof setResetCounterAC>
type setMessageAT = ReturnType<typeof setMessageAC>
type setIsDisabledAT = ReturnType<typeof setIsDisabledAC>
type setThemeModeAT = ReturnType<typeof setThemeModeAC>
type setAddCounterAT = ReturnType<typeof setAddCounterAC>


type ActionType =
    setStartValueAT
    | setStartSettingsAT
    | setMaxValueAT
    | setMaxSettingsAT
    | setResetCounterAT
    | setMessageAT
    | setIsDisabledAT
    | setThemeModeAT
    | setAddCounterAT
