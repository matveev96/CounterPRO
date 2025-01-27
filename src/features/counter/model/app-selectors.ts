import {RootState} from "../../../app/store";
import {CounterType} from "./app-reducer";

export const selectCounter = (state: RootState): CounterType => state.counter