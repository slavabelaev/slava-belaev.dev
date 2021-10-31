import {Link, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {toDateString, toTimeBetween} from "../utils";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import DevStack from "../../../components/DevStack";
import React from "react";
import {ExperienceItem} from "./Experience";

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const ExperienceList = styled('ul')(({ theme }) => ({
    marginBottom: theme.spacing(3)
}))

export type ExperienceTimelineItem = {
    item: ExperienceItem;
    isEven?: boolean;
}

export default function ExperienceTimelineItem({ item, isEven = false }: ExperienceTimelineItem) {
    const startDate = toDateString(item.startDate);
    const endDate = item.endDate
        ? toDateString(item.endDate)
        : 'настоящее время';
    const timeBetween = toTimeBetween(item.startDate, item.endDate);
    const companyLogo = (
        <TimelineDot color="primary">
            {item.company.logo}
        </TimelineDot>
    );
    const hasCompanyLink = item.company.url;
    const companyLink = hasCompanyLink && (
        <Link target="_blank" href={item.company.url}>
            {companyLogo}
        </Link>
    );

    const renderExperience = (text: string) => (
        <li>{text}</li>
    )

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
                {companyLink || companyLogo}
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Title variant="h5">
                    {item.company.name}
                </Title>
                <ExperienceList style={{ direction: isEven ? 'ltr' : 'rtl' }}>
                    {item.experience.map(renderExperience)}
                </ExperienceList>
                <DevStack stack={item.stack || []} />
            </TimelineContent>
        </TimelineItem>
    )
}
