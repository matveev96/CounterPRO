import React from 'react';
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import {useAppSelector} from "./hooks";
import {getTheme} from "../common/theme/theme";
import {Main} from "./Main";
import {selectCounter} from "../features/counter/model/counter-selectors";


function App() {

    const {themeMode} = useAppSelector(selectCounter);

    return (
        <ThemeProvider theme={getTheme(themeMode)}>
            <CssBaseline/>
            <Main/>
        </ThemeProvider>
    );
}


export default App;
