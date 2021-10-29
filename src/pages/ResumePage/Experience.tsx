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
import WebdeloLogo from "../../logos/Webdelo";
import AlfaLogo from "../../logos/Alfa";
import DexLogo from "../../logos/Dex";
import UpworkLogo from "../../logos/Upwork";
import DevStack, {TechnologyName} from "../../components/DevStack";
import {styled} from "@mui/material";

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
            logo: <AlfaLogo />
        },
        startDate: '04-01-2020',
        experience: [
            'Разработка Frontend-приложения для оформления заявки на зарплатный проект',
            'Доработка приложения для просмотра/редактирования информации о клиентах банка для офисных сотрудников и курьеров'
        ],
        stack: ['TypeScript', 'React', 'Redux', 'NodeJS', 'Hapi', 'Jenkins']
    },
    {
        company: {
            name: 'Upwork',
            logo: <UpworkLogo />
        },
        startDate: '05-01-2018',
        endDate: '04-01-2020',
        experience: [
            'Разработка многостраничных сайтов',
            'Разработка SPA приложений',
            'Поиск и устранение проблем в существующих проектах',
            'Создание парсеров и скриптов автоматизации',
        ],
        stack: ['JS', 'TypeScript', 'CRA', 'React', 'Vue', 'Bootstrap', 'MUI']
    },
    {
        company: {
            name: 'DEX',
            logo: <DexLogo />
        },
        startDate: '02-01-2018',
        endDate: '05-01-2018',
        experience: [
            'Разработка приложения для контроля установки коммуникационных вышек компании Nokia',
            'Разработка админ-панели для компании DiggiDeal',
        ],
        stack: ['TypeScript', 'CRA', 'React', 'Redux', 'Angular', 'AntDesign', 'Bootstrap']
    },
    {
        company: {
            name: 'Webdelo Studio',
            logo: <WebdeloLogo />
        },
        startDate: '02-01-2017',
        endDate: '09-01-2018',
        experience: [
            'Верстка многостраничных сайтов для монолитных приложений, для российских заказчиков',
            'Создание SPA приложения для компании по поиску арендуемого жилья в Болгарии',
        ],
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'Angular', 'Bootstrap', 'Grunt', 'Gulp']
    },
    {
        company: {
            name: 'Министерство цифрового развития ПМР',
            logo: <BusinessIcon fontSize="large" />
        },
        startDate: '05-01-2013',
        endDate: '05-01-2016',
        experience: [
            'Создание шаблонов и модулей для CMS Joomla',
            'Создание государственных сайтов и сервисов',
        ],
        stack: ['HTML', 'CSS', 'JS', 'jQuery', 'KendoUI', 'Bootstrap', 'Joomla']
    }
]

const toDateString = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long'
    }).format(date);
}

const toTimeBetween = (startDate: string, endDate?: string) => {
    const startTime = new Date(startDate).getTime();
    const endTime = endDate
        ? new Date(endDate).getTime()
        : new Date().getTime();
    const oneMonthTime = 1000 * 60 * 60 * 24 * 31;
    const timeBetween = endTime - startTime + oneMonthTime;
    const dateBetween = new Date(timeBetween);
    const months = dateBetween.getMonth();
    const years = dateBetween.getFullYear() - 1970;

    const intl = (new Intl.RelativeTimeFormat('ru', {
        style: 'long'
    }));

    const monthString = months
        ? intl.format(months, 'months').replace('через ', '')
        : '';
    const yearsString = years
        ? intl.format(years, 'years').replace('через ', '')
        : '';

    return [yearsString, monthString].join(' ');
}

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
                    <TimelineDot>
                        {item.company.logo}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Title variant="h6">
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
