import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import Navbar from '../components/navbar/navbar';
import UserRoutes from '../routes/userRoutes';
import Fallback from '../webpages/fallback';


export default function UserLayout() {

    const handleError = useErrorHandler(); //use in event handlers and asynchronous code to catch error and show fallback webpage

    // try{

    // }catch(e){
    //     handleError(e)
    // }

    const errorHandler = (error, errorInfo) => {
        console.log('logging', error, errorInfo)
    }
    
    return (
        <>
            <Navbar />
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                <div>
                    <h1>I'm homepage</h1>
                    <Stack spacing={2} direction="row">
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </Stack>
                </div>
                {UserRoutes}
            </ErrorBoundary>
        </>
    )
}
