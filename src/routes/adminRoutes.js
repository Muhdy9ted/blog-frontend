import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

const Login = lazy(() => import('../webpages/login/login'));

let routes = (
    <Suspense fallback={<CircularProgress color='secondary' />}>
        <Switch>
            <Route exact path= '/admin' component={Login} />
            <Redirect to='/' />
        </Switch>
    </Suspense>
);

export default routes;