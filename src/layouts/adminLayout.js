import React, { useEffect, useState, useMemo } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Navbar from '../components/navbar/navbar';
import AdminRoutes from '../routes/adminRoutes';
import Fallback from '../webpages/fallback';

export default function AdminLayout() {

    const errorHandler = (error, errorInfo) => {
        console.log('logging', error, errorInfo)
    }

    const [timeoutID, setTimeoutID] = useState(null)

    useEffect(() => {
        sessionTimeoutSetup();

        return (() => {
            sessionTimeoutCleanup();
        });
    }, [])
    

    function sessionTimeoutSetup(){
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('mousedown', resetTimer);
        window.addEventListener('keypress', resetTimer);
        window.addEventListener('DOMMouseScroll', resetTimer);
        window.addEventListener('mousewheel', resetTimer);
        window.addEventListener('touchmove', resetTimer);
        window.addEventListener('MSPointerMouse', resetTimer);
    }

    function sessionTimeoutCleanup(){
        window.removeEventListener('mousemove', resetTimer);
        window.removeEventListener('mousedown', resetTimer);
        window.removeEventListener('keypress', resetTimer);
        window.removeEventListener('DOMMouseScroll', resetTimer);
        window.removeEventListener('mousewheel', resetTimer);
        window.removeEventListener('touchmove', resetTimer);
        window.removeEventListener('MSPointerMouse', resetTimer);
    }

    function startTimer(){
        setTimeoutID(setTimeout(goInactive, 10000));
    }

    function resetTimer(){
        console.log('i ve be reset timer')
        clearTimeout(timeoutID);
        goActive();
    }

    function goActive(){
        startTimer();
    }

    function goInactive(){
        logout();
    }

    function logout(){
        console.log('i have been logged out')
    }
    

    
    return (
        <>
            <Navbar />
            <Container>
                <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                    <h1>I'm homepage</h1>
                    <Stack spacing={2} direction="row">
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </Stack>

                    {AdminRoutes}
                </ErrorBoundary>
            </Container>
        </>
    )
}
