import React, {Suspense} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ResumePage = React.lazy(() => import('./pages/ResumePage'));

export const ROUTE_PATH = {
    HOME: '/',
    RESUME: '/resume',
}

export default function AppRouter() {
    return (
        <HashRouter>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path={ROUTE_PATH.RESUME} render={() => <ResumePage />} />
                    <Route render={() => <HomePage />} />
                </Switch>
            </Suspense>
        </HashRouter>
    )
}
