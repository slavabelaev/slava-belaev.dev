import AvatarURL from "../../containers/Logo/SlavaBelaev.jpg";
import {Avatar, Grid, ListItem, ListItemIcon, ListItemText, styled, Typography} from "@mui/material";
import HomeWork from "@mui/icons-material/HomeWork";
import Location from "@mui/icons-material/LocationOn";

const Root = styled('figure')(({ theme }) => ({
    display: 'flex',
    margin: 0,
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(6),
}))

const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: 240,
    height: 240,
    marginRight: theme.spacing(4)
}))

const ProfessionName = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2)
}))

const Description = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2)
}));

export default function UserInfo() {
    return (
        <Root>
            <UserAvatar
                variant='rounded'
                src={AvatarURL}
            />
            <figcaption>
                <Typography color="primary" variant='h3'>
                    Вячеслав Беляев
                </Typography>
                <ProfessionName color="textSecondary" variant='h5'>
                    Frontend-разработчик
                </ProfessionName>
                <Description variant='body1'>
                    Умеренный перфекционист, позитивный, честный. Люблю писать код, не люблю review-вить. В чужих конфликтах предпочитаю сохранять нейтралитет, уважаю чужие права и частную собственность.
                </Description>
                <Grid container>
                    <Grid item sm={3}>
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Avatar>
                                    🇷🇺
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Русский"
                                secondary="Родной"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item sm={3}>
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Avatar>
                                    🇺🇸
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Английский"
                                secondary="B1"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item sm={3}>
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Avatar>
                                    <HomeWork />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Удаленно"
                                secondary="готов к переезду"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item sm={3}>
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Avatar>
                                    <Location />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Москва"
                                secondary="м. Первомайская"
                            />
                        </ListItem>
                    </Grid>
                </Grid>
            </figcaption>
        </Root>
    )
}
