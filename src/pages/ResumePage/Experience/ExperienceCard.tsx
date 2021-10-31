import React, {useState} from "react";
import {toDateString} from "../utils";
import {Avatar, Card, CardContent, CardHeader, Collapse, Divider, IconButton, Link, styled} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import DevStack from "../../../components/DevStack";
import {ExperienceItem} from "./Experience";

export type ExperienceCardProps = {
    item: ExperienceItem;
}

const ListItem = styled('li')(({ theme }) => ({
    '& + &': {
        marginTop: theme.spacing(2)
    }
}))

const LogoAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}))

export default function ExperienceCard({ item }: ExperienceCardProps) {
    const [isExpanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!isExpanded);
    const startDate = toDateString(item.startDate, 'short');
    const endDate = item.endDate
        ?  'по ' + toDateString(item.endDate, 'short')
        : 'сейчас';
    const companyLogo = (
        <LogoAvatar>
            {item.company.logo}
        </LogoAvatar>
    );
    const hasCompanyLink = item.company.url;
    const companyLink = hasCompanyLink && (
        <Link target="_blank" href={item.company.url}>
            {companyLogo}
        </Link>
    );

    const renderExperience = (text: string) => (
        <ListItem>{text}</ListItem>
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
