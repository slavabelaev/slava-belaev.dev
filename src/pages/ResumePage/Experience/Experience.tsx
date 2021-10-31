import React, {ReactNode} from 'react';
import Timeline from '@mui/lab/Timeline';
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import WebdeloLogo from "../../../logos/Webdelo";
import AlfaLogo from "../../../logos/Alfa";
import DexLogo from "../../../logos/Dex";
import UpworkLogo from "../../../logos/Upwork";
import {TechnologyName} from "../../../components/DevStack";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import {Hidden} from "@mui/material";

export type ExperienceItem = {
    company: {
        logo: ReactNode;
        name: string;
        url?: string;
    };
    startDate: string;
    endDate?: string;
    experience: string[];
    stack?: TechnologyName[];
}

const items: ExperienceItem[] = [
    {
        company: {
            name: 'Альфа-Банк',
            url: 'https://alfabank.ru/',
            logo: <AlfaLogo fontSize="large" />
        },
        startDate: '2020-04-01',
        experience: [
            'Разработка приложения для контроля выплат участникам реферальной программы',
            'Разработка приложения для оформления заявки на зарплатный проект',
            'Разработка приложения для просмотра/редактирования информации о клиентах банка для офисных сотрудников и курьеров'
        ],
        stack: ['TypeScript', 'React', 'Redux', 'NodeJS', 'Hapi', 'Jenkins']
    },
    {
        company: {
            name: 'Upwork',
            url: 'https://upwork.com/',
            logo: <UpworkLogo fontSize="large" />
        },
        startDate: '2018-05-01',
        endDate: '2020-04-01',
        experience: [
            'Разработка многостраничных сайтов',
            'Разработка SPA-приложений',
            'Поиск и устранение проблем в существующих проектах',
            'Создание парсеров и скриптов автоматизации',
        ],
        stack: ['JS', 'TypeScript', 'CRA', 'React', 'Vue', 'Bootstrap', 'MUI']
    },
    {
        company: {
            name: 'DEX',
            url: 'https://dex-it.ru/',
            logo: <DexLogo fontSize="large" />
        },
        startDate: '2018-02-01',
        endDate: '2018-05-01',
        experience: [
            'Разработка SPA-приложения для контроля установки коммуникационных вышек компании Nokia',
            'Разработка админ-панели для компании DiggiDeal',
        ],
        stack: ['TypeScript', 'CRA', 'React', 'Redux', 'Angular', 'AntDesign', 'Bootstrap']
    },
    {
        company: {
            name: 'Webdelo Studio',
            url: 'https://webdelo.org/',
            logo: <WebdeloLogo fontSize="large" />
        },
        startDate: '2017-02-01',
        endDate: '2018-02-01',
        experience: [
            'Верстка многостраничных сайтов',
            'Создание SPA приложения для поиска арендуемого жилья в Болгарии компании VPUT',
        ],
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'Angular', 'Bootstrap', 'Grunt', 'Gulp']
    },
    {
        company: {
            name: 'Freelance',
            logo: <PersonIcon fontSize="large" />
        },
        startDate: '2016-05-01',
        endDate: '2017-02-01',
        experience: [
            'Разработка шаблона интернет-магазина по продаже цветов Grand Flora',
            'Разработка сайта по продаже курсов иностранных языков Maklass',
            'Разработка шаблонов сайтов для микро-кредитных организаций',
        ],
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'Bootstrap', 'Joomla', 'Wordpress']
    },
    {
        company: {
            name: 'Министерство цифрового развития ПМР',
            logo: <BusinessIcon fontSize="large" />
        },
        startDate: '2013-05-01',
        endDate: '2016-05-01',
        experience: [
            'Разработка сайта президента ПМР',
            'Разработка портала государственных услуг ПМР',
            'Разработка государственных сервисов',
        ],
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'KendoUI', 'Bootstrap', 'Joomla', 'Wordpress']
    }
]

export default function Experience() {
    const renderExperienceCard = (item: ExperienceItem) => (
        <ExperienceCard
            key={item.company.name}
            item={item}
        />
    );

    const renderExperienceTimelineItem = (item: ExperienceItem, index: number) => (
        <ExperienceTimelineItem
            key={item.company.name}
            item={item}
            isEven={index % 2 === 0}
        />
    );

    return (
        <div>
            <Hidden smUp>
                {items.map(renderExperienceCard)}
            </Hidden>
            <Hidden smDown>
                <Timeline position="alternate">
                    {items.map(renderExperienceTimelineItem)}
                </Timeline>
            </Hidden>
        </div>
    );
}
