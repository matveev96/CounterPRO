import { combineReducers, legacy_createStore as createStore } from 'redux'
import {appReducer} from "../model/app-reducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
     counter: appReducer,
})

const persistedState = loadState();

export const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() => {
     saveState({
          counter: store.getState().counter
     })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
