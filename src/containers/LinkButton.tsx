import {Button, createTheme, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

export const buttonTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1',
        }
    }
})

export type ActionButtonProps = {
    to: string;
    children: ReactNode;
    startIcon: ReactNode
}

export default function LinkButton({ children, startIcon, to }: ActionButtonProps) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <Button
                component={Link}
                to={to}
                style={{ whiteSpace: 'nowrap' }}
                variant="contained"
                color="primary"
                startIcon={startIcon}
            >
                {children}
            </Button>
        </ThemeProvider>
    )
}
