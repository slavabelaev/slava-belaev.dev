import React from 'react';
import AppThemeProvider from './containers/ThemeProvider';
import ErrorBoundary from "./containers/ErrorBoundary";
import AppRouter from "./AppRouter";

function App() {
    return (
        <AppThemeProvider>
            <ErrorBoundary>
                <AppRouter />
            </ErrorBoundary>
        </AppThemeProvider>
    );
}

export default App;
