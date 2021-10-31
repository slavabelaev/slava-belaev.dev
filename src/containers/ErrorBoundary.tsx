import React from 'react';
import {Link, Typography} from "@mui/material";
import {styled} from "@mui/styles";

const Container = styled('div')(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

const Header = styled('header')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
}))

class ErrorBoundary extends React.Component {
    state = { hasError: false};

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            const profileLink = (
                <Link target="_blank" href="https://github.com/slavabelaev">
                    Slava Belaev
                </Link>
            )

            return (
                <Container>
                    <Header>
                        <Typography variant="h6">Looks like I'm broke</Typography>
                        <Typography variant="body1">But soon {profileLink} will fix me</Typography>
                    </Header>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
