import {Container, Divider, Hidden, Link, Stack, styled, SvgIconProps, Tooltip, Typography} from "@mui/material";
import Atlassian from "../../icons/Atlassian";
import Confluence from "../../icons/Confluence";
import GitHub from "../../icons/GitHub";
import Slack from "../../icons/Slack";
import Jira from "../../icons/Jira";
import Bitbucket from "../../icons/Bitbucket";
import TypeScriptIcon from "../../icons/TypeScript";
import CRAIcon from "../../icons/CRA";
import ReactIcon from "../../icons/React";
import ReduxIcon from "../../icons/Redux";

type Item = {
    title: string;
    Icon: React.FC<SvgIconProps>;
    url: string;
}

const items: Item[] = [
    {
        title: 'TypeScript',
        Icon: TypeScriptIcon,
        url: 'https://www.typescriptlang.org/'
    },
    {
        title: 'CRA',
        Icon: CRAIcon,
        url: 'https://create-react-app.dev/'
    },
    {
        title: 'React',
        Icon: ReactIcon,
        url: 'https://reactjs.org/'
    },
    {
        title: 'Redux',
        Icon: ReduxIcon,
        url: 'https://redux.js.org/'
    },
];

const secondaryItems: Item[] = [
    {
        title: 'Atlassian',
        Icon: Atlassian,
        url: 'https://www.atlassian.com/'
    },
    {
        title: 'Confluence',
        Icon: Confluence,
        url: 'https://confluence.atlassian.com/'
    },
    {
        title: 'GitHub',
        Icon: GitHub,
        url: 'https://github.com/'
    },
    {
        title: 'Slack',
        Icon: Slack,
        url: 'https://slack.com/'
    },
    {
        title: 'Jira',
        Icon: Jira,
        url: 'https://jira.atlassian.com/'
    },
    {
        title: 'Bitbucket',
        Icon: Bitbucket,
        url: 'https://bitbucket.org/'
    }
]

const StackItem = styled('figure')(({ theme }) => ({
    textAlign: 'center',
    margin: 0
}));

const StackItemLabel = styled('figcaption')(({ theme }) => ({
    marginTop: theme.spacing(2)
}));

const GroupDivider = styled(Divider)(({ theme }) => ({
    width: 120,
    margin: theme.spacing(4, 'auto')
}));

export default function MainStack() {
    const renderItem = (item: Item) => {
        const { Icon } = item || {};
        return (
            <StackItem>
                <Link target="_blank" href={item.url}>
                    <Hidden smDown>
                        <Icon
                            fontSize="inherit"
                            style={{
                                height: 96,
                                width: 'auto'
                            }}
                        />
                    </Hidden>
                    <Hidden smUp>
                        <Icon
                            fontSize="inherit"
                            style={{
                                height: 48,
                                width: 'auto'
                            }}
                        />
                    </Hidden>
                </Link>
                <Hidden smDown>
                    <StackItemLabel>
                        <Typography variant='h5'>
                            {item.title}
                        </Typography>
                    </StackItemLabel>
                </Hidden>
            </StackItem>
        )
    };

    const renderSecondaryItem = (item: Item) => {
        const { Icon } = item || {};
        return (
            <Tooltip title={item.title}>
                <Link target="_blank" href={item.url}>
                    <StackItem>
                        <Hidden smDown>
                            <Icon
                                fontSize="inherit"
                                style={{
                                    height: 48,
                                    width: 'auto'
                                }}
                            />
                        </Hidden>
                        <Hidden smUp>
                            <Icon
                                fontSize="inherit"
                                style={{
                                    height: 24,
                                    width: 'auto'
                                }}
                            />
                        </Hidden>
                    </StackItem>
                </Link>
            </Tooltip>
        )
    }

    return (
        <div>
            <Container maxWidth="md">
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                    {items?.map(renderItem)}
                </Stack>
            </Container>
            <GroupDivider />
            <Container maxWidth="sm">
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                    {secondaryItems?.map(renderSecondaryItem)}
                </Stack>
            </Container>
        </div>
    )
}
