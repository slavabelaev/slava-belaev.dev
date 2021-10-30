import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {styled} from '@mui/styles';
import Telegram from '../../icons/links/Telegram';
import {AlternateEmail, Email, WhatsApp} from "@mui/icons-material";

export const contacts = [
    {
        icon: <AlternateEmail />,
        title: 'Email',
        url: 'mailto:slav@belaev.dev'
    },
    {
        icon: <WhatsApp />,
        title: 'WhatsApp',
        url: 'https://wa.me/79771771877'
    },
    {
        icon: <Telegram />,
        title: 'Telegram',
        url: 'tg://resolve?domain=slavabelaev'
    },
];

export type Contact = typeof contacts[0];

const Root = styled('div')(({ theme }) => ({
    position: 'fixed',
    bottom: 16,
    right: 16
}))

const RootBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: -1
}))

export default function Contacts() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const createHandleNavigateTo = (url: string) => () => (window as any).open(url, '_blank').focus();

    const renderAction = (action: Contact) => (
        <SpeedDialAction
            style={{ background: "transparent" }}
            key={action.title}
            icon={action.icon}
            tooltipTitle={action.title}
            tooltipOpen
            onClick={createHandleNavigateTo(action.url)}
        />
    );

    return (
        <Root>
            <RootBackdrop open={open} />
            <SpeedDial
                ariaLabel="Slava Belaev Contacts"
                icon={<SpeedDialIcon icon={<Email />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {contacts.map(renderAction)}
            </SpeedDial>
        </Root>
    );
}
