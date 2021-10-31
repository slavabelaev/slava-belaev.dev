import React, {ReactNode, useState} from "react";
import {
    Button,
    Collapse,
    Hidden,
    List,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import UdemyLogo from "../../../logos/Udemy";
import CourseTimelineItem from "./CourseTimelineItem";
import CourseListItem from "./CourseListItem";

export type Course = {
    company: {
        name: string;
        logo: ReactNode;
    },
    course: {
        logo: ReactNode;
        title: string;
        url?: string;
        rating: number;
    };
    startDate: string;
    endDate?: string;
}

const courses: Course[] = [
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '2019-03-04',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Cypress: Web Automation Testing from Zero to Hero',
            url: 'https://www.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '2019-06-25',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
            url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '12-04-2019',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Webpack 5: The Complete Guide For Beginners',
            url: 'https://www.udemy.com/course/webpack-from-beginner-to-advanced/',
            logo: <UdemyLogo />,
            rating: 4.5,
        },
        startDate: '2021-02-23',
    },
]

const otherCourses: Course[] = [
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'React + Redux - Профессиональная Разработка',
            url: 'https://www.udemy.com/course/pro-react-redux/',
            logo: <UdemyLogo />,
            rating: 4.7
        },
        startDate: '2019-04-10',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Build an app with React, Redux and Firestore from scratch',
            url: 'https://www.udemy.com/course/build-an-app-with-react-redux-and-firestore-from-scratch/',
            logo: <UdemyLogo />,
            rating: 4.9,
        },
        startDate: '2019-06-12',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Microfrontends with React: A Complete Developer\'s Guide',
            url: 'https://www.udemy.com/course/microfrontend-course/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '2021-08-11',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Basic RESTful API with Fastify (Node.js + TypeScript)',
            url: 'https://www.udemy.com/course/basic-fastify/',
            logo: <UdemyLogo />,
            rating: 4.5,
        },
        startDate: '2021-05-01',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'MongoDB - The Complete Developer\'s Guide',
            url: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '2019-12-04',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
            url: 'https://www.udemy.com/course/docker-mastery/',
            logo: <UdemyLogo />,
            rating: 4.7,
        },
        startDate: '2019-12-04',
    },
    {
        company: {
            name: 'Udemy',
            logo: <UdemyLogo />
        },
        course: {
            title: 'Flutter & Dart - The Complete Guide',
            url: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/',
            logo: <UdemyLogo />,
            rating: 4.6,
        },
        startDate: '2019-12-04',
    },
]

export default function Courses() {
    const [isExpanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!isExpanded);

    const renderTimelineItem = (item: Course) => (
        <CourseTimelineItem
            key={item.course.title}
            item={item}
        />
    );

    const renderListItem = (item: Course) => (
        <CourseListItem
            key={item.course.title}
            item={item}
        />
    );

    const toggle = (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={toggleExpand}>
                {isExpanded ? 'Свернуть' : 'Показать еще'}
            </Button>
        </div>
    );

    const timelineCourses = (
        <div>
            <Timeline position="alternate">
                {courses.map(renderTimelineItem)}
            </Timeline>
            <Collapse in={isExpanded}>
                <Timeline position="alternate">
                    {otherCourses.map(renderTimelineItem)}
                </Timeline>
            </Collapse>
            {toggle}
        </div>
    );

    const courseList = (
        <div>
            <List disablePadding>
                {courses.map(renderListItem)}
            </List>
            <Collapse in={isExpanded}>
                <List disablePadding>
                    {otherCourses.map(renderListItem)}
                </List>
            </Collapse>
            {toggle}
        </div>
    );

    return (
        <div>
            <Hidden smDown>
                {timelineCourses}
            </Hidden>
            <Hidden smUp>
                {courseList}
            </Hidden>
        </div>
    )
}
