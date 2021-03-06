import {
    Container, Fade, Hidden,
    styled,

} from "@mui/material";
import Experience from "./Experience/Experience";
import Courses from "./Courses/Courses";
import {toTimeBetween} from "./utils";
import Header from "../../containers/Header";
import Education from "./Education/Education";
import Sources from "./Sources";
import UserInfo from "./UserInfo";
import MainStack from "./MainStack";
import React, {PropsWithChildren, useEffect, useState} from "react";
import LinkButton from "../../containers/LinkButton";
import {ROUTE_PATH} from "../../AppRouter";
import {Apps} from "@mui/icons-material";
import Contacts from "../../containers/Contacts";
import ErrorBoundary from "../../containers/ErrorBoundary";
import {useInView} from "react-hook-inview";

const Section = styled('section')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        '& + &': {
            marginTop: theme.spacing(8)
        },
        '&:last-child': {
            marginBottom: theme.spacing(8)
        },
    },
    [theme.breakpoints.down('sm')]: {
        '& + &': {
            marginTop: theme.spacing(4)
        },
        '&:last-child': {
            marginBottom: theme.spacing(4)
        },
    }
}))

const Title = styled('div')(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h5.fontSize,
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h4.fontSize,
        marginBottom: theme.spacing(3),
    }
}))

const TotalExperience = styled('span')(({ theme }) => ({
    color: theme.palette.info.main
}))

function AnimatedSection({ children }: PropsWithChildren<{}>) {
    const [ref, inView] = useInView();
    return (
        <ErrorBoundary>
            <Fade in={inView} timeout={500}>
                <Section ref={ref}>
                    {children}
                </Section>
            </Fade>
        </ErrorBoundary>
    )
}

export default function ResumePage() {
    const [isFaded, setFaded] = useState(false);
    const totalExperienceTime = toTimeBetween('2013-05-01', new Date());

    useEffect(() => {
        setFaded(true);
    }, []);

    const action = (
        <LinkButton
            to={ROUTE_PATH.HOME}
            startIcon={<Apps />}
        >
            <Hidden smDown>
                See&nbsp;
            </Hidden>
            Portfolio
        </LinkButton>
    )

    const totalExperience = (
        <TotalExperience>
            {totalExperienceTime}
        </TotalExperience>
    )

    return (
        <Fade in={isFaded} timeout={500}>
            <div>
                <Header
                    title="Resume"
                    action={action}
                />
                <Container>
                    <AnimatedSection>
                        <UserInfo />
                    </AnimatedSection>

                    <AnimatedSection>
                        <Title>
                            ???????????????? ????????????
                        </Title>
                        <MainStack />
                    </AnimatedSection>

                    <AnimatedSection>
                        <Title>
                            ???????? ???????????? ??? {totalExperience}
                        </Title>
                        <Experience />
                    </AnimatedSection>

                    <AnimatedSection>
                        <Title>
                            ??????????????????????
                        </Title>
                        <Education />
                    </AnimatedSection>

                    <AnimatedSection>
                        <Title>
                            ?????????? ?????????????????? ????????????????????????
                        </Title>
                        <Courses />
                    </AnimatedSection>

                    <AnimatedSection>
                        <Title>
                            ?????????????????? ????????????
                        </Title>
                        <Sources />
                    </AnimatedSection>
                </Container>
                <Contacts />
            </div>
        </Fade>
    )
}
