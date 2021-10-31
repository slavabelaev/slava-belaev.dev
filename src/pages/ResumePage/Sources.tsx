import {Hidden, Link, styled, SvgIconProps} from "@mui/material";
import Udemy from "../../logos/fullwidth/Udemy";
import Coursera from "../../logos/fullwidth/Coursera";
import Medium from "../../logos/fullwidth/Medium";
import MDN from "../../logos/fullwidth/MDN";
import WebDev from "../../logos/WebDev";
import DevTo from "../../logos/DevTo";

export type SourceItem = {
    Icon: React.FC<SvgIconProps>;
    url: string;
    style: any;
    smStyle: any;
}

const items: SourceItem[] = [
    {
        Icon: Udemy,
        url: 'https://www.udemy.com/',
        style: {
            position: 'relative',
            height: 60,
            width: 'auto',
            top: -5,
        },
        smStyle: { height: 40, width: 'auto' }
    },
    {
        Icon: Coursera,
        url: 'https://www.coursera.org/',
        style: { height: 36, width: 'auto' },
        smStyle: { height: 24, width: 'auto' }
    },
    {
        Icon: Medium,
        url: 'https://medium.com/',
        style: { height: 36, width: 'auto' },
        smStyle: { height: 20, width: 'auto' }
    },
    {
        Icon: MDN,
        url: 'https://developer.mozilla.org',
        style: { height: 36, width: 'auto' },
        smStyle: { height: 24, width: 'auto' }
    },
    {
        Icon: WebDev,
        url: 'https://web.dev/',
        style: { height: 36, width: 'auto' },
        smStyle: { height: 28, width: 'auto' }
    },
    {
        Icon: DevTo,
        url: 'https://dev.to/',
        style: { height: 36, width: 'auto' },
        smStyle: { height: 36, width: 'auto' }
    },
]

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
    margin: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: theme.breakpoints.values.md
}))

const Item = styled('div')(({ theme }) => ({
    // padding: theme.spacing(2)
}))

export default function Sources() {
    const renderItem = (item: SourceItem) => {
        const Icon = item.Icon;
        return (
            <Item>
                <Link target="_blank" href={item.url}>
                    <Hidden mdDown>
                        <Icon fontSize="inherit" style={item.style} />
                    </Hidden>
                    <Hidden mdUp>
                        <Icon fontSize="inherit" style={item.smStyle} />
                    </Hidden>
                </Link>
            </Item>
        );
    }

    return (
        <Root>
            {items.map(renderItem)}
        </Root>
    )
}
