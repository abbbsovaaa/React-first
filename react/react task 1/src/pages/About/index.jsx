import { Paper } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import PageContainer from "../../components/PageContainer"
import usta from "../../assets/usta.png"
const About = () => {
    return (

        <PageContainer>
            <Container>
                <Box sx={{
                    display: 'flex',
                    margin:'50px'
                }}>
                    <Paper sx={{
                        width: ' 300px',
                        height: '200px',

                    }} elevation={3}>
                        <Stack
                            sx={{
                                margin: 'auto 50px'
                            }}> <h4>Telefon</h4></Stack>
                        <Stack sx={{
                            margin: '10px 50px'
                        }}>(+994 12) 565-1-565</Stack>
                        <Stack sx={{
                            margin: '10px 50px'
                        }}>(+994 12) 565-2-565</Stack>
                        <Stack sx={{
                            margin: '10px 50px'
                        }}>(+994 55) 222-32-46</Stack>
                        <Stack sx={{
                            margin: '10px 50px'
                        }}>(+994 55) 222-34-19</Stack>
                    </Paper>
                    <Paper sx={{
                        width: '300px',
                        height: '100px',
                       margin:'10px'

                    }} elevation={3}>
                        <Stack sx={{
                            margin:'5px 10px'
                        }}><h3>Ünvan</h3></Stack>
                        <Stack sx={{
                            margin:'5px 10px'
                        }}>Bakı ş., Şamaxı yolu 15-ci km.</Stack>
                    </Paper>
                    <Paper sx={{
                        width: '300px',
                        height: '100px',

                    }} elevation={3}>

                        <Stack sx={{
                            margin:'5px 10px'
                        }}> <h3>Email</h3> </Stack>
                        <Stack sx={{
                            margin:'5px 10px'
                        }}>office@solitonservice.com</Stack>
                    </Paper>

                </Box>

       <Stack sx={{
        width:'100px',
        height:'100px',
       }}>
        <img src="usta" alt="usta" />
       </Stack>



            </Container>
        </PageContainer>

    )
}
export default About;
