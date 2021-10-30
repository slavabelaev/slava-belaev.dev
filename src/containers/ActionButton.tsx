import {Button, createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Apps, Article} from "@mui/icons-material";

export const buttonTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1',
        }
    }
})


export default function ActionButton() {
    const { pathname } = useLocation();
    const isResumePage = pathname === '/resume';
    const to = isResumePage ? '/' : '/resume';
    const text = isResumePage ? 'See portfolio' : 'See resume';
    const icon = isResumePage ? <Apps /> : <Article />;

    return (
        <ThemeProvider theme={buttonTheme}>
            <Button
                component={Link}
                to={to}
                style={{ whiteSpace: 'nowrap' }}
                variant="contained"
                color="primary"
                startIcon={icon}
            >
                {text}
            </Button>
        </ThemeProvider>
    )
}
