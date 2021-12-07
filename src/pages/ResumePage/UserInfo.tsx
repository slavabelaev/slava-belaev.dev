import AvatarURL from "../../containers/Logo/SlavaBelaev.jpg";
import {
    Avatar,
    Grid, Hidden,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    styled,
    Typography
} from "@mui/material";
import HomeWork from "@mui/icons-material/HomeWork";
import Location from "@mui/icons-material/LocationOn";
import {ReactNode} from "react";
import {Check} from "@mui/icons-material";

const Root = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
    }
}))

const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('lg')]: {
        maxWidth: 200
    },
    [theme.breakpoints.down('sm')]: {
        height: 240,
        margin: 'auto',
        marginBottom: theme.spacing(2),
    }
}))

const Description = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2)
}));

const UserDetails = styled('section')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(4),
    },
    '& li': {
        listStyle: 'none'
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
        ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.h4,
        textAlign: 'center',
    }
}));

type Detail = {
    title: ReactNode;
    description: ReactNode;
    icon: ReactNode;
}

const details: Detail[] = [
    {
        icon: '🇷🇺',
        title: 'Русский',
        description: 'Родной'
    },
    {
        icon: '🇺🇸',
        title: 'Английский',
        description: 'B1'
    },
    {
        icon: <HomeWork />,
        title: 'Удаленно',
        description: 'готов к переезду'
    },
    {
        icon: <Location />,
        title: 'Москва',
        description: 'м. Первомайская'
    }
]

export default function UserInfo() {
    const renderDetail = (item: Detail, index: number) => (
        <Grid key={index} item xs={12} sm={6} lg={3}>
            <ListItem disableGutters>
                <ListItemIcon>
                    <Avatar>
                        {item.icon}
                    </Avatar>
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    secondary={item.description}
                />
                <Hidden smUp>
                    <ListItemSecondaryAction>
                        <Check />
                    </ListItemSecondaryAction>
                </Hidden>
            </ListItem>
        </Grid>
    )

    return (
        <Root container>
            <Grid item xs={12} sm={5} md={4} lg={3} display="flex" justifyContent="end">
                <UserAvatar
                    variant='rounded'
                    src={AvatarURL}
                />
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9}>
                <UserDetails>
                    <Title>Вячеслав Беляев</Title>
                    <Description variant='body1'>
                        Умеренный перфекционист, позитивный, честный. Люблю писать код, не люблю review-вить. Хороший код восхищает, плохой раздражает.
                    </Description>
                    <Grid container>
                        {details.map(renderDetail)}
                    </Grid>
                </UserDetails>
            </Grid>
        </Root>
    )
}
