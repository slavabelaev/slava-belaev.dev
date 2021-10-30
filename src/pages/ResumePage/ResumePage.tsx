import {Avatar, Container, Divider, styled, Typography} from "@mui/material";
import Experience from "./Experience";
import ReactIcon from '../../icons/React';
import ReduxIcon from '../../icons/Redux';
import CRAIcon from '../../icons/CRA';
import TypeScriptIcon from '../../icons/TypeScript';
import AvatarURL from '../../containers/Logo/SlavaBelaev.jpg';
import Courses from "./Courses";
import {toTimeBetween} from "./utils";
import {Fragment, ReactNode} from "react";
import Header from "../../containers/Header";
import SpecialEducation from "./SpecialEducation";
import MDN from "../../logos/MDN";
import Medium from "../../logos/Medium";
import DevTo from "../../logos/DevTo";
import WebDev from "../../logos/WebDev";
import Atlassian from "../../icons/Atlassian";
import Confluence from "../../icons/Confluence";
import Jira from "../../icons/Jira";
import Bitbucket from "../../icons/Bitbucket";
import GitHub from "../../icons/GitHub";
import Slack from "../../icons/Slack";

const IconGroup = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: theme.spacing(3, 0)
}))

const Section = styled('section')(({ theme }) => ({
    '& + &': {
        marginTop: theme.spacing(4)
    },
    '&:last-child': {
        marginBottom: theme.spacing(8)
    }
}))

const UserCard = styled('figure')(({ theme }) => ({
    display: 'flex',
    margin: 0,
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
}))

const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: 200,
    height: 200,
    marginRight: theme.spacing(4)
}))

const ProfessionName = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2)
}))

const Technology = styled('figure')(({ theme }) => ({
    textAlign: 'center'
}));

const TechnologyLabel = styled('figcaption')(({ theme }) => ({
    marginTop: theme.spacing(2)
}));

const GroupDivider = styled(Divider)(({ theme }) => ({
    width: 120,
    margin: theme.spacing(2, 'auto')
}));

type KeyTechnology = {
    title: string;
    icon: ReactNode;
}

const keyTechnologies: KeyTechnology[] = [
    {
        title: 'TypeScript',
        icon: <TypeScriptIcon fontSize="inherit" style={{ height: 96, width: 'auto' }} />
    },
    {
        title: 'CRA',
        icon: <CRAIcon fontSize="inherit" style={{ height: 96, width: 'auto' }} />
    },
    {
        title: 'React',
        icon: <ReactIcon fontSize="inherit" style={{ height: 96, width: 'auto' }} />
    },
    {
        title: 'Redux',
        icon: <ReduxIcon fontSize="inherit" style={{ height: 96, width: 'auto' }} />
    },
];

export default function ResumePage() {
    const renderKeyTechnology = (item: KeyTechnology) => (
        <Technology>
            {item.icon}
            <TechnologyLabel>
                <Typography variant='h5'>
                    {item.title}
                </Typography>
            </TechnologyLabel>
        </Technology>
    );

    return (
        <Fragment>
            <Header title="Resume" />
            <Container>
                <UserCard>
                    <UserAvatar
                        variant='rounded'
                        src={AvatarURL}
                    />
                    <figcaption>
                        <Typography variant='h3'>
                            Вячеслав Беляев
                        </Typography>
                        <ProfessionName variant='h5'>
                            Frontend Web-разработчик
                        </ProfessionName>
                        <Typography variant='body1'>
                            Любопытный, очарован технологиями, активно слежу за тенденциями в мире IT, умеренный перфекционист, документация — лучший друг
                        </Typography>
                    </figcaption>
                </UserCard>
                <main>
                    <Section>
                        <Typography variant='h4'>
                            Ключевые навыки
                        </Typography>
                        <IconGroup>
                            {keyTechnologies?.map(renderKeyTechnology)}
                        </IconGroup>
                        <GroupDivider />
                        <IconGroup>
                            <Atlassian fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                            <Confluence fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                            <GitHub fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                            <Slack fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                            <Jira fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                            <Bitbucket fontSize="inherit" style={{ height: 48, width: 'auto' }} />
                        </IconGroup>
                    </Section>
                    <Section>
                        <Typography variant='h4'>
                            Опыт работы {toTimeBetween('2013-05-01', new Date())}
                        </Typography>
                        <Experience />
                    </Section>
                    <Section>
                        <Typography variant='h4'>
                            Специальное образование
                        </Typography>
                        <SpecialEducation />
                    </Section>
                    <Section>
                        <Typography variant='h4'>
                            Курсы повышения квалификации
                        </Typography>
                        <Courses />
                    </Section>
                    <Section>
                        <Typography variant='h4'>
                            Любимые источники информации
                        </Typography>
                        <IconGroup>
                            <MDN fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                            <Medium fontSize="inherit" style={{ height: 40, width: 'auto' }} />
                            <DevTo fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                            <WebDev fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                        </IconGroup>
                    </Section>
                </main>
            </Container>
        </Fragment>
    )
}
