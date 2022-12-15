import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

const UserLayout = lazy(() => import('../layouts/userLayout'));
const AdminLayout = lazy(() => import('../layouts/adminLayout'));


let routes = (
    <Suspense fallback={<CircularProgress color='secondary' />}>
        <Switch>
            <Route exact path= '/' component={UserLayout} />
            <Route exact path= '/admin' component={AdminLayout} />
            <Redirect to='/' />
        </Switch>
    </Suspense>
);

export default routes;