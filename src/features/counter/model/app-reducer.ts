import {createAction, createReducer} from "@reduxjs/toolkit";

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

export const setStartValueAC = createAction<{ newValue: number }>('counter/startValue')
export const setMaxValueAC = createAction<{ newMaxValue: number }>('counter/maxValue')
export const setStartSettingsAC = createAction<{ newValue: number }>('counter/startSettings')
export const setMaxSettingsAC = createAction<{ newMaxValue: number }>('counter/maxSettings')
export const setCountAC = createAction<{ newCount: number }>('counter/count')
export const setMessageAC = createAction<{ newString: string }>('counter/message')
export const setIsDisabledAC = createAction<{ bool: boolean }>('counter/isDisabled')
export const setThemeModeAC = createAction<{ darkMode: ThemeMode }>('counter/themeMode')

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(setStartValueAC, (state, action) => {
            state.startValue = action.payload.newValue
        })
        .addCase(setMaxValueAC, (state, action) => {
            state.maxValue = action.payload.newMaxValue
        })
        .addCase(setStartSettingsAC, (state, action) => {
            state.startSettings = action.payload.newValue
        })
        .addCase(setMaxSettingsAC, (state, action) => {
            state.maxSettings = action.payload.newMaxValue
        })
        .addCase(setCountAC, (state, action) => {
            state.count = action.payload.newCount
        })
        .addCase(setMessageAC, (state, action) => {
            state.message = action.payload.newString
        })
        .addCase(setIsDisabledAC, (state, action) => {
            state.isDisabled = action.payload.bool
        })
        .addCase(setThemeModeAC, (state, action) => {
            state.themeMode = action.payload.darkMode
        })
})

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
