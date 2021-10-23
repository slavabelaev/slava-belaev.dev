import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Fade, Hidden, IconButton, styled, Toolbar, Tooltip, Typography} from '@mui/material';
import {Contact, contacts} from './Contacts';
import SendMailButton from "./SendMailButton";

const FullNameLabel = styled('span')(({ theme }) => ({
    whiteSpace: 'nowrap',
    color: theme.palette.common.white
}))

const HyphenLabel = styled('span')(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    opacity: .24,
    color: theme.palette.common.white
}))

const ProfessionNameLabel = styled('span')(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.common.white,
    opacity: .72
}))

const PortfolioLabel = styled('span')(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.text.disabled
}))

const Title = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.common.white,
    marginRight: theme.spacing(2)
}))

const Aside = styled('aside')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
}))

const IconGroup = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
}))

const AvatarWrapper = styled('div')(({ theme }) => ({
    marginRight: theme.spacing(1)
}))

export default function Header() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const renderContact = (contact: Contact, index: number) => {
        const isLast = index === (contacts.length - 1);
        return (
            <Tooltip
                key={contact.title}
                title={contact.title}
            >
                <IconButton
                    edge={isLast && 'end'}
                    target="_blank"
                    href={contact.url}
                    rel="noreferrer"
                    aria-haspopup="true"
                >
                    {contact.icon}
                </IconButton>
            </Tooltip>
        );
    }

    return (
        <Fade in={fadeIn} timeout={1000}>
            <AppBar position="sticky">
                <Toolbar>
                    <AvatarWrapper>
                        <Tooltip title="My Instagram">
                            <IconButton
                                edge="start"
                                target="_blank"
                                href="https://www.instagram.com/slavabelaev/"
                                rel="noreferrer"
                                aria-haspopup="true"
                            >
                                <Avatar
                                    alt="Slava Belaev"
                                    src="https://avatars2.githubusercontent.com/u/7487565?s=80&v=4"
                                />
                            </IconButton>
                        </Tooltip>
                    </AvatarWrapper>
                    <Title variant="h6">
                        <FullNameLabel>Slava B.</FullNameLabel>
                        <Hidden mdDown>
                            <HyphenLabel>/</HyphenLabel>
                            <ProfessionNameLabel>Frontend Developer</ProfessionNameLabel>
                        </Hidden>
                        <HyphenLabel>/</HyphenLabel>
                        <PortfolioLabel>My Portfolio</PortfolioLabel>
                    </Title>
                    <Aside>
                        <Hidden xsDown>
                            <SendMailButton />
                        </Hidden>
                        <Hidden mdDown>
                            <IconGroup>
                                {contacts.map(renderContact)}
                            </IconGroup>
                        </Hidden>
                    </Aside>
                </Toolbar>
            </AppBar>
        </Fade>
    );
}
