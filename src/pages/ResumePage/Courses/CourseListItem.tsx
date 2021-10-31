import {toDateString} from "../utils";
import {Avatar, Link, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import React from "react";
import {Course} from "./Courses";

export type CourseListItemProps = {
    item: Course;
}

export default function CourseListItem({ item }: CourseListItemProps) {
    const startDate = toDateString(item.startDate);
    return (
        <ListItem
            component={Link}
            target="_blank"
            href={item.course?.url || '#'}
        >
            <ListItemAvatar>
                <Avatar>
                    {item.company?.logo}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.course?.title}
                secondary={startDate}
            />
        </ListItem>
    )
}
