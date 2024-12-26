import React from 'react';
import Paper from '@mui/material/Paper';

type WrapperPropsType = {
    children: React.ReactNode;
}

export const Wrapper = (props: WrapperPropsType) => {
    return (
        <Paper elevation={3}
               sx={{p:'20px',
               }}>
            {props.children}
        </Paper>
    );
};