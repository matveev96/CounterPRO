import {RootState} from "../../../app/store";
import {CounterType} from "./counter-reducer";

export const selectCounter = (state: RootState): CounterType => state.counter