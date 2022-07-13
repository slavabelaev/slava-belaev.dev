import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {styled} from '@mui/styles';
import {Email} from "@mui/icons-material";
import {Contact, contacts} from "../../constants/contacts";

const Root = styled(SpeedDial)(({ theme }) => ({
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
            style={{ background: "transparent" }}
            key={action.title}
            icon={action.icon}
            tooltipTitle={action.title}
            tooltipOpen
            onClick={createHandleNavigateTo(action.url)}
        />
    );

    return (
        <Root
            ariaLabel="Contacts"
            icon={<SpeedDialIcon icon={<Email />} />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            {open && Object.values(contacts).map(renderAction)}
        </Root>
    );
}
