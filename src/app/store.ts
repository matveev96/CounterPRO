import {counterReducer} from "../features/counter/model/counter-reducer";
import {loadState, saveState} from "./localStorage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

const preloadedState = loadState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState
})

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

