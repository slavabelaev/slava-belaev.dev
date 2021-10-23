import {Button, createTheme, ThemeProvider, Tooltip, TooltipProps} from "@mui/material";
import {Email} from "@mui/icons-material";
import React, {ReactNode} from "react";

export const buttonTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1',
        }
    }
})

const contactEmail = 'slav@belaev.dev';

export type SendMailButtonProps = {
    text?: ReactNode;
    TooltipProps?: Partial<TooltipProps>;
}

export default function SendMailButton({ text = 'Contact Me', TooltipProps }: SendMailButtonProps) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <Tooltip
                title={'Send message to ' + contactEmail}
                placement="left"
                {...TooltipProps}
            >
                <Button
                    style={{ whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    href={'mailto:' + contactEmail}
                    startIcon={<Email />}
                >
                    {text}
                </Button>
            </Tooltip>
        </ThemeProvider>
    )
}
