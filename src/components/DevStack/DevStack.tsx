import React from 'react';
import {Link, Stack, styled, Tooltip} from "@mui/material";
import JenkinsIcon from "../../icons/Jenkins";
import ReactIcon from "../../icons/React";
import ReduxIcon from "../../icons/Redux";
import TypeScriptIcon from "../../icons/TypeScript";
import NodeJSIcon from "../../icons/NodeJS";
import HapiIcon from "../../icons/Hapi";
import PHPIcon from "../../icons/PHP";
import JQueryIcon from "../../icons/JQuery";
import VueIcon from "../../icons/Vue";
import BootstrapIcon from "../../icons/Bootstrap";
import MUIIcon from "../../icons/MUI";
import AntDesignIcon from "../../icons/AntDesign";
import AngularIcon from "../../icons/Angular";
import JSIcon from "../../icons/JS";
import CSSIcon from "../../icons/CSS";
import HTMLIcon from "../../icons/HTML";
import GruntIcon from "../../icons/Grunt";
import GulpIcon from "../../icons/Gulp";
import CRAIcon from "../../icons/CRA";
import KendoUIIcon from "../../icons/KendoUI";
import JoomlaIcon from "../../icons/Joomla";
import WordpressIcon from "../../icons/Wordpress";

const TechnologyIcon = {
    HTML: {
        icon: <HTMLIcon />,
        url: 'https://html.spec.whatwg.org/',
    },
    CSS: {
        icon: <CSSIcon />,
        url: 'https://wiki.csswg.org/'
    },
    JS: {
        icon: <JSIcon />,
        url: 'https://www.ecma-international.org/'
    },
    TypeScript: {
        icon: <TypeScriptIcon />,
        url: 'https://www.typescriptlang.org/'
    },
    PHP: {
        icon: <PHPIcon />,
        url: 'https://www.php.net/'
    },
    React: {
        icon: <ReactIcon />,
        url: 'https://reactjs.org/'
    },
    Redux: {
        icon: <ReduxIcon />,
        url: 'https://redux.js.org/'
    },
    Bootstrap: {
        icon: <BootstrapIcon />,
        url: 'https://getbootstrap.com/'
    },
    AntDesign: {
        icon: <AntDesignIcon />,
        url: 'https://ant.design/'
    },
    MUI: {
        icon: <MUIIcon />,
        url: 'https://mui.com/'
    },
    Vue: {
        icon: <VueIcon />,
        url: 'https://vuejs.org/'
    },
    Angular: {
        icon: <AngularIcon />,
        url: 'https://angular.io/'
    },
    Hapi: {
        icon: <HapiIcon />,
        url: 'https://hapi.dev/'
    },
    jQuery: {
        icon: <JQueryIcon />,
        url: 'https://jquery.com/'
    },
    Grunt: {
        icon: <GruntIcon />,
        url: 'https://gruntjs.com/'
    },
    Gulp: {
        icon: <GulpIcon />,
        url: 'https://gulpjs.com/'
    },
    CRA: {
        icon: <CRAIcon />,
        url: 'https://create-react-app.dev/'
    },
    KendoUI: {
        icon: <KendoUIIcon />,
        url: 'https://www.telerik.com/kendo-ui'
    },
    Joomla: {
        icon: <JoomlaIcon />,
        url: 'https://www.joomla.org/'
    },
    Wordpress: {
        icon: <WordpressIcon />,
        url: 'https://wordpress.com/'
    },
    NodeJS: {
        icon: <NodeJSIcon />,
        url: 'https://nodejs.org/'
    },
    Jenkins: {
        icon: <JenkinsIcon />,
        url: 'https://www.jenkins.io/'
    },
}

export type TechnologyName = keyof typeof TechnologyIcon;

export type DevStackProps = {
    stack: TechnologyName[]
};

const IconStack = styled(Stack)(({ theme }) => ({
   display: 'inline-flex'
}));

export default function DevStack({ stack }: DevStackProps) {
    const renderIcon = (name: TechnologyName) => {
        const item = TechnologyIcon[name];
        return (
            <Tooltip title={name}>
                <Link display="inline-flex" target="_blank" href={item.url}>
                    {item.icon}
                </Link>
            </Tooltip>
        );
    }

    return (
        <IconStack alignItems="center" direction="row" spacing={2}>
            {stack?.map(renderIcon)}
        </IconStack>
    )
}
