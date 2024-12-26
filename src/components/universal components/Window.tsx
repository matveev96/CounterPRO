import React from 'react';
import Box from "@mui/material/Box";

type WindowProps = {
    children: React.ReactNode;
}

export const Window = (props: WindowProps) => {
    return (
        <Box
            sx={{
                width: 400,
                height: 200,
                borderRadius: 1,
                bgcolor: 'primary.light'
            }}
        >
            {props.children}
        </Box>
    );
};