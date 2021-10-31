import {toDateString} from "../utils";
import {Avatar, Link, ListItem, ListItemAvatar, ListItemText, styled} from "@mui/material";
import React from "react";
import {Course} from "./Courses";

export type CourseListItemProps = {
    item: Course;
}

const LogoAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}))

export default function CourseListItem({ item }: CourseListItemProps) {
    const startDate = toDateString(item.startDate);
    return (
        <ListItem
            disableGutters
            component={Link}
            target="_blank"
            href={item.course?.url || '#'}
        >
            <ListItemAvatar>
                <LogoAvatar>
                    {item.company?.logo}
                </LogoAvatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.course?.title}
                secondary={startDate}
            />
        </ListItem>
    )
}
