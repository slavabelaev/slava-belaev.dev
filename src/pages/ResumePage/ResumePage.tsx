import {Avatar, Container, styled, Typography} from "@mui/material";
import Experience from "./Experience";
import ReactIcon from '../../icons/React';
import ReduxIcon from '../../icons/Redux';
import CRAIcon from '../../icons/CRA';
import TypeScriptIcon from '../../icons/TypeScript';
import AvatarURL from '../../icons/SlavaBelaev.jpg';
import Education from "./Education";

const Group = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
}))

const Section = styled('section')(({ theme }) => ({
    '& + &': {
        marginTop: theme.spacing(4)
    }
}))

const UserCard = styled('figure')(({ theme }) => ({
    display: 'flex',
    marginBottom: theme.spacing(8)
}))

export default function ResumePage() {
    return (
        <Container>
            <UserCard>
                <Avatar
                    variant='rounded'
                    style={{ width: 240, height: 240 }}
                    src={AvatarURL}
                />
                <figcaption>
                    <Typography variant='h1'>
                        Slava Belaev
                    </Typography>
                    <Typography variant='h4'>
                        Frontend Developer
                    </Typography>
                    <Typography variant='body1'>
                        Любопытный, очарован технологиями, активно слежу за тенденциями в мире IT, умеренный перфекционист, документация — лучший друг
                    </Typography>
                </figcaption>
            </UserCard>
            <main>
                <Section>
                    <Typography variant='h2'>
                        Ключевые навыки
                    </Typography>
                    <Group>
                        <figure>
                            <CRAIcon />
                            <figcaption>
                                <Typography variant='h6'>
                                    CRA
                                </Typography>
                            </figcaption>
                        </figure>
                        <figure>
                            <ReactIcon />
                            <figcaption>
                                <Typography variant='h6'>
                                    React
                                </Typography>
                            </figcaption>
                        </figure>
                        <figure>
                            <ReduxIcon />
                            <figcaption>
                                <Typography variant='h6'>
                                    Redux
                                </Typography>
                            </figcaption>
                        </figure>
                        <figure>
                            <TypeScriptIcon />
                            <figcaption>
                                <Typography variant='h6'>
                                    TypeScript
                                </Typography>
                            </figcaption>
                        </figure>
                    </Group>
                </Section>
                <Section>
                    <Typography variant='h2'>
                        Опыт работы
                    </Typography>
                    <Experience />
                </Section>
                <Section>
                    <Typography variant='h2'>
                        Образование
                    </Typography>
                    <Education />
                </Section>
            </main>
        </Container>
    )
}
