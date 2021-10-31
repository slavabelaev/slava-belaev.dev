import {Link, Rating, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {toDateString} from "../utils";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import React from "react";
import {Course} from "./Courses";

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const Description = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

export type CourseTimelineItemProps = {
    item: Course;
}

export default function CourseTimelineItem({ item }: CourseTimelineItemProps) {
    const startDate = toDateString(item.startDate);
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <Typography component="div">{startDate}</Typography>
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
                    <Link target="_blank" href={item.course.url}>
                        {item.course.title}
                    </Link>
                </Description>
                <Rating value={item.course.rating} precision={0.1} readOnly />
            </TimelineContent>
        </TimelineItem>
    )
}
