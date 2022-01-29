import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

const HomePage = lazy(() => import('./webpages/homepage'));

let routes = (
    <Suspense fallback={<CircularProgress color='secondary' />}>
        <Switch>
            <Route exact path= '/' component={HomePage} />
            <Redirect to='/' />
        </Switch>
    </Suspense>
);

export default routes;