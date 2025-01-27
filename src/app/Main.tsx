import React from 'react';
import Grid from "@mui/material/Grid2";
import {Settings} from "../features/counter/ui/Settings/Settings";
import {Counter} from "../features/counter/ui/Counter/Counter";
import Container from "@mui/material/Container";
import {SwitchDarkMode} from "../common/components/SwithDarkMode/SwitchDarkMode";

export const Main = () => {

    const styleContainer = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignContent: "center"
    }

    return (<>
            <SwitchDarkMode/>
            <Container fixed color={'primary'} sx={styleContainer}>
                <Grid container spacing={5} columns={2} sx={{justifyContent: "center"}}>
                    <Settings/>
                    <Counter/>
                </Grid>
            </Container>
        </>

    );
};
