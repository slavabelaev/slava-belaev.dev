import React from 'react';
import {AppBar, Avatar, Hidden, IconButton, styled, Toolbar, Tooltip, Typography} from '@mui/material';
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

const DelimiterLabel = styled('span')(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    opacity: .24,
    color: theme.palette.common.white
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
    marginLeft: theme.spacing(1),
}))

const AvatarWrapper = styled('div')(({ theme }) => ({
    marginRight: theme.spacing(1)
}))

export default function Header() {
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
                    <Hidden smDown>
                        <FullNameLabel>Slava B.</FullNameLabel>
                    </Hidden>
                    <Hidden mdDown>
                        <HyphenLabel>—</HyphenLabel>
                        <ProfessionNameLabel>Frontend Developer</ProfessionNameLabel>
                    </Hidden>
                    <Hidden smDown>
                        <DelimiterLabel>/</DelimiterLabel>
                    </Hidden>
                    <PortfolioLabel>My Portfolio</PortfolioLabel>
                </Title>
                <Aside>
                    <SendMailButton />
                    <Hidden mdDown>
                        <IconGroup>
                            {contacts.map(renderContact)}
                        </IconGroup>
                    </Hidden>
                </Aside>
            </Toolbar>
        </AppBar>
    );
}
