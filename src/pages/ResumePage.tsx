import {Container, Divider, styled, Typography} from "@mui/material";

const Body = styled('div')(({ theme }) => ({
    display: 'flex'
}))

export default function ResumePage() {
    return (
        <Container>
            <header>
                <Typography variant='h1'>
                    Slava Belaev
                </Typography>
                <Typography variant='h4'>
                    Frontend Developer
                </Typography>
            </header>
            <Divider />
            <Body>
                <aside>
                    <section>
                        <Typography variant='h6'>
                            Details
                        </Typography>
                    </section>

                    <section>
                        <Typography variant='h6'>
                            Skills
                        </Typography>
                    </section>
                </aside>
                <main>
                    <section>
                        <Typography variant='h6'>
                            Profile
                        </Typography>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus nulla officiis rem. Amet ducimus eos ipsum, iure modi reprehenderit? Atque fugit hic quis suscipit. Adipisci incidunt iusto officiis ratione.
                        </Typography>
                    </section>
                </main>
            </Body>
        </Container>
    )
}
