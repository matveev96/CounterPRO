import FormControlLabel from "@mui/material/FormControlLabel";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setThemeModeAC} from "../../../features/counter/model/counter-reducer";
import {selectCounter} from "../../../features/counter/model/counter-selectors";
import {MaterialUISwitch} from "./MUISwitchDarkMode";
import React from "react";

export const SwitchDarkMode = () => {

    const {themeMode} = useAppSelector(selectCounter);

    const dispatch = useAppDispatch()

    const changeModeHandler = () => {
        const darkMode = themeMode === 'light' ? 'dark' : 'light'
        dispatch(setThemeModeAC({darkMode}))
    }

    return (
        <FormControlLabel control={<MaterialUISwitch onClick={changeModeHandler}/>}
                          label={`Dark mode ${themeMode === 'light' ? 'off' : 'on'}`}
                          sx={{m: '20px'}}/>
    )
}
