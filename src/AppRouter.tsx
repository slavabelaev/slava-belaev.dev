import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ResumePage = React.lazy(() => import('./pages/ResumePage'));

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path='/resume' render={() => <ResumePage />} />
                    <Route render={() => <HomePage />} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
