import React, {useState} from "react";
import {toDateString} from "../utils";
import {Avatar, Card, CardContent, CardHeader, Collapse, Divider, IconButton, Link} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import DevStack from "../../../components/DevStack";
import {ExperienceItem} from "./Experience";

export type ExperienceCardProps = {
    item: ExperienceItem;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
    const [isExpanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!isExpanded);
    const startDate = toDateString(item.startDate, 'short');
    const endDate = item.endDate
        ?  'по ' + toDateString(item.endDate, 'short')
        : 'сейчас';
    const companyLogo = (
        <Avatar color="primary">
            {item.company.logo}
        </Avatar>
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

    const expandAction = (
        <IconButton onClick={toggleExpand}>
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
    );

    return (
        <Card sx={{ mb: 2 }}>
            <CardHeader
                avatar={companyLink || companyLogo}
                action={expandAction}
                title={item.company.name}
                subheader={`${startDate} — ${endDate}`}
            />
            <Divider />
            <Collapse in={isExpanded}>
                <CardContent>
                    <ul style={{ margin: 0, paddingLeft: 24 }}>
                        {item.experience.map(renderExperience)}
                    </ul>
                </CardContent>
            </Collapse>
            <Divider />
            <CardContent sx={{ display: 'flex', alignItems: 'center' }} style={{ paddingBottom: 16 }}>
                <DevStack stack={item.stack || []} />
            </CardContent>
        </Card>
    );
}
