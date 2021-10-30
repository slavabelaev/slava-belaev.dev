import React, {ReactNode, useState} from "react";
import {Button, Collapse, LinearProgress, Link, Rating, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import {toDateString, toTimeBetween} from "./utils";
import UdemyLogo from "../../logos/Udemy";

export type ExperienceItem = {
    company: {
        name: string;
        logo: ReactNode;
    },
    course: {
        logo: ReactNode;
        title: string;
        url?: string;
    };
    startDate: string;
    endDate?: string;
}

const universities: ExperienceItem[] = [
    {
        company: {
            name: 'Приднестровский Государственный Университет им. Т. Г. Шевченко',
            logo: null,
        },
        course: {
            title: 'Приднестровский Государственный Университет им. Т. Г. Шевченко',
            logo: null
        },
        // target: 'Автоматизированные системы обработки информации и управления',
        startDate: '04-01-2009',
        endDate: '04-01-2013',
    },
];

const courses: ExperienceItem[] = [
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Cypress: Web Automation Testing from Zero to Hero',
            url: 'https://www.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
            url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Webpack 5: The Complete Guide For Beginners',
            url: 'https://www.udemy.com/course/webpack-from-beginner-to-advanced/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
]

const otherCourses: ExperienceItem[] = [
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'React + Redux - Профессиональная Разработка',
            url: 'https://www.udemy.com/course/pro-react-redux/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Build an app with React, Redux and Firestore from scratch',
            url: 'https://www.udemy.com/course/build-an-app-with-react-redux-and-firestore-from-scratch/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Microfrontends with React: A Complete Developer\'s Guide',
            url: 'https://www.udemy.com/course/microfrontend-course/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Basic RESTful API with Fastify (Node.js + TypeScript)',
            url: 'https://www.udemy.com/course/basic-fastify/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'MongoDB - The Complete Developer\'s Guide',
            url: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
            url: 'https://www.udemy.com/course/docker-mastery/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Flutter & Dart - The Complete Guide',
            url: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/',
            logo: <UdemyLogo />
        },
        startDate: '01-01-2000',
        endDate: '01-01-2000',
    },
]

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const Description = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

export default function Education() {
    const [isExpanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!isExpanded);

    const renderItem = (item: ExperienceItem, index: number) => {
        const startDate = toDateString(item.startDate);
        const endDate = item.endDate
            ? toDateString(item.endDate)
            : 'настоящее время';
        const timeBetween = toTimeBetween(item.startDate, item.endDate);
        return (
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography component="div">{startDate} — по {endDate}</Typography>
                    <Typography component="div" variant="caption">{timeBetween}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        {item.course.logo}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Title variant="h6">
                        {item.company.name}
                    </Title>
                    <Description>
                        <Link target="_blank" href={item.course.url}>
                            {item.course.title}
                        </Link>
                    </Description>
                    <Rating value={4.4} precision={0.5} readOnly />
                    <LinearProgress variant="determinate" value={80} />
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <div>
            <section>
                <Typography variant="h6">Специальное образование</Typography>
                <Timeline position="alternate">
                    {universities.map(renderItem)}
                </Timeline>
            </section>
            <section>
                <Typography variant="h6">Повышение квалификации, курсы</Typography>
                <Timeline position="alternate">
                    {courses.map(renderItem)}
                </Timeline>
                <Collapse in={isExpanded}>
                    <Timeline position="alternate">
                        {otherCourses.map(renderItem)}
                    </Timeline>
                </Collapse>
                <div>
                    <Button onClick={toggleExpand}>
                        {isExpanded ? 'Скрыть' : 'Показать еще'}
                    </Button>
                </div>
            </section>
        </div>
    );
}
