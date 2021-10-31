import React, {ReactNode} from "react";
import Timeline from "@mui/lab/Timeline";
import EducationTimelineItem from "./EducationTimelineItem";
import {Card, CardContent, CardHeader, Divider, Hidden, Typography} from "@mui/material";
import {toDateString} from "../utils";

export type EducationItem = {
    company: {
        name: string;
        logo: ReactNode;
    },
    speciality: string;
    startDate: string;
    endDate?: string;
}

const items: EducationItem[] = [
    {
        company: {
            name: 'Приднестровский Государственный Университет им. Т. Г. Шевченко',
            logo: null,
        },
        speciality: 'Автоматизированные системы обработки информации и управления',
        startDate: '2009-04-01',
        endDate: '2013-04-01',
    },
];

export type EducationCardProps = {
    item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
    const startDate = toDateString(item.startDate, 'short');
    const endDate = item.endDate
        ? toDateString(item.endDate, 'short')
        : 'настоящее время';

    const title = (
        <Typography variant="h6">
            {item.company.name}
        </Typography>
    );

    const subheader = (
        <Typography color="textSecondary" sx={{ mt: 1 }}>
            {startDate} — по {endDate}
        </Typography>
    );

    return (
        <Card>
            <CardHeader
                title={title}
                subheader={subheader}
            />
            <Divider />
            <CardContent>
                {item.speciality}
            </CardContent>
        </Card>
    )
}

export default function Education() {
    const renderTimelineItem = (item: EducationItem) => (
        <EducationTimelineItem
            key={item.company.name}
            item={item}
        />
    )

    const renderCard = (item: EducationItem) => (
        <EducationCard
            key={item.company.name}
            item={item}
        />
    )

    const timeline = (
        <Hidden mdDown>
            <Timeline position="alternate">
                {items.map(renderTimelineItem)}
            </Timeline>
        </Hidden>
    );

    const list = (
        <Hidden mdUp>
            {items.map(renderCard)}
        </Hidden>
    );

    return (
        <div>
            {timeline}
            {list}
        </div>
    )
}
