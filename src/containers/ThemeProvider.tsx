import {PropsWithChildren} from 'react';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e3f2fd'
        }
    },
});


export const primaryTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1',
        }
    }
})

export type AppThemeProviderProps = PropsWithChildren<{}>;

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
