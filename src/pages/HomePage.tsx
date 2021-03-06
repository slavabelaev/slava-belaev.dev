import React from "react";
import {Container, styled} from "@mui/material";
import Header from "../containers/Header";
import Projects from "../containers/Projects";
import Contacts from "../containers/Contacts";
import bgImageURL from "../bg.png";
import LinkButton from "../containers/LinkButton";
import {ROUTE_PATH} from "../AppRouter";
import {Article} from "@mui/icons-material";

const BodyContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '&:before': {
        content: '""',
        display: 'block',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `url(${bgImageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        backgroundSize: '95vh',
        opacity: .075,
        zIndex: -1,
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: '-15% 100%',
        }
    }
}))

export default function HomePage() {
    const action = (
        <LinkButton
            to={ROUTE_PATH.RESUME}
            startIcon={<Article />}
        >
            See Resume
        </LinkButton>
    );

    return (
        <React.Fragment>
            <Header
                title="Portfolio"
                action={action}
            />
            <BodyContainer maxWidth="xl">
                <Projects />
            </BodyContainer>
            <Contacts />
        </React.Fragment>
    )
}
