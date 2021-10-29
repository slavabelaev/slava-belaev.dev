import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import {styled} from '@mui/styles';
import Upwork from './icons/Upwork';
import Telegram from './icons/Telegram';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

export const contacts = [
    {
        icon: <Telegram />,
        title: 'Telegram',
        url: 'tg://resolve?domain=slavabelaev'
    },
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

export type Contact = typeof contacts[0];

const Root = styled('div')(({ theme }) => ({
    position: 'fixed',
    bottom: 16,
    right: 16
}))

export default function Contacts() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const createHandleNavigateTo = (url: string) => () => (window as any).open(url, '_blank').focus();

    const renderAction = (action: Contact) => (
        <SpeedDialAction
            key={action.title}
            icon={action.icon}
            tooltipTitle={action.title}
            tooltipOpen
            onClick={createHandleNavigateTo(action.url)}
        />
    );

    return (
        <Root>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="Slava Belaev Contacts"
                icon={<SpeedDialIcon icon={<ShareIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {contacts.map(renderAction)}
            </SpeedDial>
        </Root>
    );
}
