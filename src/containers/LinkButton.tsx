import {Button, createTheme, styled, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

export const buttonTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1',
            // contrastText: '#2d67d1',
        }
    }
})

export type ActionButtonProps = {
    to: string;
    children: ReactNode;
    startIcon: ReactNode
}

const StyledButton = styled(Button)(({ theme }) => ({
    whiteSpace: 'nowrap',
    background: 'linear-gradient(-45deg, #0d47a1 10%, #0d2781)',
    transition: 'background .24s ease-out',
    backgroundSize: '1px 72px',
    '&:hover': {
        backgroundPosition: '36px'
    }
}))

export default function LinkButton({ children, startIcon, to }: ActionButtonProps) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <StyledButton
                // @ts-ignore
                component={Link}
                to={to}
                variant="contained"
                color="primary"
                startIcon={startIcon}
            >
                {children}
            </StyledButton>
        </ThemeProvider>
    )
}
