import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useErrorHandler } from 'react-error-boundary';

import {ColorModeContext}  from '../App';

export default function Homepage() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const handleError = useErrorHandler();

    // try{

    // }catch(e){
    //     handleError(e)
    // }
    
    return (
        <div>
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <h1>I'm homepage</h1>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}
