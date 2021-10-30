import {
    Container, Fade,
    styled,
    Typography,
} from "@mui/material";
import Experience from "./Experience";
import Courses from "./Courses";
import {toTimeBetween} from "./utils";
import Header from "../../containers/Header";
import SpecialEducation from "./SpecialEducation";
import Sources from "./Sources";
import UserInfo from "./UserInfo";
import MainStack from "./MainStack";
import {useEffect, useState} from "react";

const Section = styled('section')(({ theme }) => ({
    '& + &': {
        marginTop: theme.spacing(12)
    },
    '&:last-child': {
        marginBottom: theme.spacing(12)
    }
}))

const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(6)
}))

export default function ResumePage() {
    const [isFaded, setFaded] = useState(false);

    useEffect(() => {
        setFaded(true);
    }, [])

    return (
        <Fade in={isFaded}>
            <div>
                <Header title="Resume" />
                <Container>
                    <UserInfo />
                    <Section>
                        <Title variant='h4'>
                            Ключевые навыки
                        </Title>
                        <MainStack />
                    </Section>
                    <Section>
                        <Title variant='h4'>
                            Опыт работы {toTimeBetween('2013-05-01', new Date())}
                        </Title>
                        <Experience />
                    </Section>
                    <Section>
                        <Title variant='h4'>
                            Специальное образование
                        </Title>
                        <SpecialEducation />
                    </Section>
                    <Section>
                        <Title variant='h4'>
                            Курсы повышения квалификации
                        </Title>
                        <Courses />
                    </Section>
                    <Section>
                        <Title variant='h4'>
                            Основные источники знаний
                        </Title>
                        <Sources />
                    </Section>
                </Container>
            </div>
        </Fade>
    )
}
