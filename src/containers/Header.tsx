import React, {ReactNode, useEffect, useState} from 'react';
import {
    AppBar,
    Breadcrumbs,
    Fade,
    Hidden,
    IconButton,
    styled,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import {Contact, contacts} from './Contacts';
import SendMailButton from "./SendMailButton";
import Logo from "./Logo";

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

export type HeaderProps = {
    title: ReactNode;
}

export default function Header({ title }: HeaderProps) {
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
                    <Hidden smUp>
                        <Logo />
                    </Hidden>
                    <Hidden smDown>
                        <Breadcrumbs>
                            <Logo />
                            <Typography variant="h6">
                                { title }
                            </Typography>
                        </Breadcrumbs>
                    </Hidden>
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
        </Fade>
    );
}
