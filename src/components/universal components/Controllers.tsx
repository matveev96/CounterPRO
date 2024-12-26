import React from 'react';
import Box from '@mui/material/Box';

type ButtonsProps = {
    children: React.ReactNode;
}

export const Controllers = (props: ButtonsProps) => {
    return (
        <Box sx={{
            margin: '20px 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            {props.children}
        </Box>
    );
};

