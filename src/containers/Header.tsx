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
import Logo from "./Logo";
import Upwork from "../icons/links/Upwork";
import LinkedIn from "../icons/links/LinkedIn";
import GitHub from "../icons/links/GitHub";

type Link = {
    icon: ReactNode;
    title: string;
    url: string;
}

export const links: Link[] = [
    // {
    //     icon: <Instagram />,
    //     title: 'Intagram',
    //     url: 'https://www.instagram.com/slavabelaev'
    // },
    {
        icon: <Upwork />,
        title: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~01e82aef512027f4ff'
    },
    {
        icon: <LinkedIn />,
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/slava-belaev-b44b8b141/'
    },
    {
        icon: <GitHub />,
        title: 'GitHub',
        url: 'https://github.com/slavabelaev'
    },
];

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
    action?: ReactNode;
}

export default function Header({ title, action }: HeaderProps) {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const renderLink = (item: Link, index: number) => {
        const isLast = index === (links.length - 1);
        return (
            <Tooltip
                key={item.title}
                title={item.title}
            >
                <IconButton
                    edge={isLast && 'end'}
                    target="_blank"
                    href={item.url}
                    rel="noreferrer"
                    aria-haspopup="true"
                >
                    {item.icon}
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
                    <Hidden smDown mdUp>
                        <Breadcrumbs>
                            <Logo />
                            <Typography variant="h6">
                                { title }
                            </Typography>
                        </Breadcrumbs>
                    </Hidden>
                    <Hidden mdDown>
                        <Breadcrumbs>
                            <Logo />
                            <Typography variant="h6">
                                Frontend Developer
                            </Typography>
                            <Typography variant="h6">
                                { title }
                            </Typography>
                        </Breadcrumbs>
                    </Hidden>
                    <Aside>
                        {action}
                        <Hidden mdDown>
                            <IconGroup>
                                {links.map(renderLink)}
                            </IconGroup>
                        </Hidden>
                    </Aside>
                </Toolbar>
            </AppBar>
        </Fade>
    );
}
