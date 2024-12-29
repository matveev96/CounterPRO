import React from 'react';
import Paper from "@mui/material/Paper";

type WindowProps = {
    children: React.ReactNode;
}

export const Window = (props: WindowProps) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                width: 400,
                height: 200,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}

        >
            {props.children}
        </Paper>
    );
};