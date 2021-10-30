import {Link, Stack} from "@mui/material";
import Udemy from "../../logos/Udemy";
import Coursera from "../../logos/Coursera";
import Medium from "../../logos/Medium";
import MDN from "../../logos/MDN";
import WebDev from "../../logos/WebDev";
import DevTo from "../../logos/DevTo";

export default function Sources() {
    return (
        <Stack alignItems="center" justifyContent="center" spacing={5}>
            <Stack direction="row" alignItems="end" spacing={8}>
                <Link target="_blank" href="https://www.udemy.com/">
                    <Udemy fontSize="inherit"
                           style={{
                               position: 'relative',
                               height: 70,
                               width: 'auto',
                               bottom: -10,
                           }}
                    />
                </Link>
                <Link target="_blank" href="https://www.coursera.org/">
                    <Coursera fontSize="inherit" style={{ height: 40, width: 'auto' }} />
                </Link>
                <Link target="_blank" href="https://medium.com/">
                    <Medium fontSize="inherit" style={{ height: 45, width: 'auto' }} />
                </Link>
            </Stack>
            <Stack direction="row" spacing={8}>
                <Link target="_blank" href="https://developer.mozilla.org/">
                    <MDN fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                </Link>
                <Link target="_blank" href="https://web.dev/">
                    <WebDev fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                </Link>
                <Link target="_blank" href="https://dev.to/">
                    <DevTo fontSize="inherit" style={{ height: 50, width: 'auto' }} />
                </Link>
            </Stack>
        </Stack>
    )
}
