import {Avatar, Hidden, styled, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import AvatarSrc from "./SlavaBelaev.jpg";

const Root = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    transition: '.3s',
    '&:hover': {
        opacity: .8
    },
    '&:active': {
        opacity: .7
    }
}))

const UserAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(2)
}))

export default function Logo() {
    return (
        <Root to="/">
            <UserAvatar
                alt="Slava Belaev"
                src={AvatarSrc}
            />
            <Typography variant="h6">
                Slava B.
            </Typography>
        </Root>
    )
}
