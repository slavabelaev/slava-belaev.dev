import React, {ReactNode} from "react";
import {Link, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import {toDateString} from "./utils";

export type ExperienceItem = {
    company: {
        name: string;
        logo: ReactNode;
    },
    speciality: string;
    startDate: string;
    endDate?: string;
}

const items: ExperienceItem[] = [
    {
        company: {
            name: 'Приднестровский Государственный Университет им. Т. Г. Шевченко',
            logo: null,
        },
        speciality: 'Автоматизированные системы обработки информации и управления',
        startDate: '04-01-2009',
        endDate: '04-01-2013',
    },
];

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const Description = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

export default function SpecialEducation() {
    const renderItem = (item: ExperienceItem, index: number) => {
        const startDate = toDateString(item.startDate);
        const endDate = item.endDate
            ? toDateString(item.endDate)
            : 'настоящее время';
        return (
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography component="div">{startDate} — по {endDate}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Title variant="h5">
                        {item.company.name}
                    </Title>
                    <Description>
                        {item.speciality}
                    </Description>
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <Timeline position="alternate">
            {items.map(renderItem)}
        </Timeline>
    );
}
