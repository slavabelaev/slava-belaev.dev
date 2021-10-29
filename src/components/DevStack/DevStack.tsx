import React from 'react';
import {styled, Tooltip} from "@mui/material";
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

const TechnologyIcon = {
    HTML: <HTMLIcon />,
    CSS: <CSSIcon />,
    JS: <JSIcon />,
    PHP: <PHPIcon />,
    React: <ReactIcon />,
    Redux: <ReduxIcon />,
    TypeScript: <TypeScriptIcon />,
    NodeJS: <NodeJSIcon />,
    Bootstrap: <BootstrapIcon />,
    AntDesign: <AntDesignIcon />,
    MUI: <MUIIcon />,
    Jenkins: <JenkinsIcon />,
    Vue: <VueIcon />,
    Angular: <AngularIcon />,
    Hapi: <HapiIcon />,
    jQuery: <JQueryIcon />,
    Grunt: <GruntIcon />,
    Gulp: <GulpIcon />,
    CRA: <CRAIcon />,
    KendoUI: <KendoUIIcon />,
    Joomla: <JoomlaIcon />,
}

export type TechnologyName = keyof typeof TechnologyIcon;

export type DevStackProps = {
    stack: TechnologyName[]
};

const Root = styled('div')(({ theme }) => ({
   display: 'inline-flex',
   alignItems: 'center',
}));

const Item = styled('div')(({ theme }) => ({
   '& + &': {
       marginLeft: theme.spacing(2)
   }
}));

export default function DevStack({ stack }: DevStackProps) {
    const renderIcon = (name: TechnologyName) => (
        <Tooltip title={name}>
            <Item>
                {TechnologyIcon[name]}
            </Item>
        </Tooltip>
    );

    return (
        <Root>
            {stack?.map(renderIcon)}
        </Root>
    )
}
