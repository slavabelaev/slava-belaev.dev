import React, {ReactNode} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import WebdeloLogo from "../../logos/Webdelo";
import AlfaLogo from "../../logos/Alfa";
import DexLogo from "../../logos/Dex";
import UpworkLogo from "../../logos/Upwork";
import DevStack, {TechnologyName} from "../../components/DevStack";
import {styled} from "@mui/material";
import {toDateString, toTimeBetween} from "./utils";

export type ExperienceItem = {
    company: {
        logo: ReactNode;
        name: string;
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
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'Bootstrap', 'Joomla']
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
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'KendoUI', 'Bootstrap', 'Joomla']
    }
]

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const ExperienceList = styled('ul')(({ theme }) => ({
    marginBottom: theme.spacing(3)
}))

export default function Experience() {
    const renderExperience = (text: string) => (
        <li>{text}</li>
    )

    const renderItem = (item: ExperienceItem, index: number) => {
        const isEven = index % 2 === 0;
        const startDate = toDateString(item.startDate);
        const endDate = item.endDate
            ? toDateString(item.endDate)
            : 'настоящее время';
        const timeBetween = toTimeBetween(item.startDate, item.endDate);
        return (
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography component="div">{startDate} — по {endDate}</Typography>
                    <Typography component="div" variant="caption">{timeBetween}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        {item.company.logo}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Title variant="h5">
                        {item.company.name}
                    </Title>
                    <ExperienceList style={{ direction: isEven ? 'ltr' : 'rtl' }}>
                        {item.experience.map(renderExperience)}
                    </ExperienceList>
                    <DevStack stack={item.stack || []} />
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <Timeline position="alternate">
            {items.map(renderItem)}
        </Timeline>
    );
}
