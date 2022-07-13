import {AlternateEmail, WhatsApp} from "@mui/icons-material";
import Telegram from "../icons/links/Telegram";
import * as React from "react";

export type Contact = {
    icon: React.ReactNode;
    title: string;
    url: string;
}

export const contacts = {
    email: {
        icon: <AlternateEmail />,
        title: 'Email',
        url: 'mailto:slav@belaev.dev'
    },
    whatsApp: {
        icon: <WhatsApp />,
        title: 'WhatsApp',
        url: 'https://wa.me/79771771877'
    },
    telegram: {
        icon: <Telegram />,
        title: 'Telegram',
        url: 'tg://resolve?domain=slavabelaev'
    },
};
