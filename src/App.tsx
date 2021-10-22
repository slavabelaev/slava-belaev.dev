import React from 'react';
import Header from './containers/Header';
import AppThemeProvider from './containers/ThemeProvider';
import Projects from './containers/Projects';
import Contacts from './containers/Contacts';
import {Container, Hidden} from '@mui/material';
import {styled} from '@mui/styles';

const BodyContainer = styled(Container)(({ theme }) => ({
    paddingTop: 24,
    paddingBottom: 24,
}))

function App() {
    return (
        <AppThemeProvider>
            <Header />
            <BodyContainer maxWidth="xl">
                <Projects />
            </BodyContainer>
            <Hidden mdUp>
                <Contacts />
            </Hidden>
        </AppThemeProvider>
    );
}

export default App;
