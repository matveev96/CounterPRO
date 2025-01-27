import {createTheme} from "@mui/material/styles";
import {ThemeMode} from "../../features/counter/model/app-reducer";

export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
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
}
