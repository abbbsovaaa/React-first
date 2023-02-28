import { Paper, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import PageContainer from "../../components/PageContainer"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import usta from '../../assets/usta.png'
const About = () => {
    return (

        <PageContainer pageName="Elaqe">
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: "row" }} mx="auto" maxWidth={600} spacing={3} mt={10}>
                    <Paper elevation={5} sx={{ minWidth: 250 }}>
                        <Typography> <LocalPhoneIcon /> Telefon</Typography>
                        <Typography pl={4}>(+994 12) 565-1-565</Typography>
                        <Typography pl={4}>(+994 12) 565-2-565</Typography>
                        <Typography pl={4}>(+994 55) 222-32-46</Typography>
                        <Typography pl={4}>(+994 55) 222-34-19</Typography>
                    </Paper>
                    <Stack justifyContent="space-between">
                        <Paper sx={{ minWidth: 230 }}>
                            <Typography> <LocalPhoneIcon /> Unvan</Typography>
                            <Typography>Bakı ş., Şamaxı yolu 15-ci km.</Typography>
                        </Paper>
                        <Paper sx={{ minWidth: 230 }}>
                            <Typography> <LocalPhoneIcon /> Email</Typography>
                            <Typography>office@solitonservice.com</Typography>
                        </Paper>

                        <br></br>
                    </Stack>
                </Stack>

                <Stack>
                    <h2>Servis Menteqelerimiz</h2>
                </Stack>
            </Container>
        </PageContainer>

    )
}
export default About;