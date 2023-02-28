import { Paper, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import PageContainer from "../../components/PageContainer"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import usta from '../../assets/usta.png'
import harita from '../../assets/harita.png'
import logo from '../../assets/logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StraightIcon from '@mui/icons-material/Straight';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const About = () => {
    return (

        <PageContainer
            pageName="Elaqe">
            <Box sx={{
                backgroundImage: `url("${usta}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                height: '200px',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    inset: 0
                }

            }}>


            </Box>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: "row" }} mx="auto" maxWidth={600} spacing={4} mt={10} >
                    <Paper elevation={7} sx={{ minWidth: 250 }}>
                        <Typography> <LocalPhoneIcon /> Telefon</Typography>
                        <Typography pl={4}>(+994 12) 565-1-565</Typography>
                        <Typography pl={4}>(+994 12) 565-2-565</Typography>
                        <Typography pl={4}>(+994 55) 222-32-46</Typography>
                        <Typography pl={4}>(+994 55) 222-34-19</Typography>
                    </Paper>
                    <Stack justifyContent="space-between">
                        <Paper elevation={7} sx={{ minWidth: 230 }}>
                            <Typography> <LocalPhoneIcon /> Unvan</Typography>
                            <Typography>Bakı ş., Şamaxı yolu 15-ci km.</Typography>
                        </Paper>
                        <Paper elevation={7} sx={{ minWidth: 230 }}>
                            <Typography> <LocalPhoneIcon /> Email</Typography>
                            <Typography>office@solitonservice.com</Typography>
                        </Paper>


                    </Stack>
                </Stack>

                <Stack sx={{
                    textAlign: 'center',
                    marginTop: '60px'
                }}>
                    <h2>Servis Menteqelerimiz</h2>
                </Stack>
            </Container>
            <Box sx={{
                textAlign: 'center'
            }}>
                <img src={harita} alt="" />
            </Box>
            <Stack direction={{ xs: 'column', md: "row" }} mx="100px" maxWidth={600} spacing={3} mt={20} >

                <Paper elevation={''} sx={{ minWidth: 250 }}>
                    <img src={logo} alt="" />
                    <Typography>"Lider Service" təcrübəli
                        mütəxəssislər və konsultantlar
                        komandasıdır</Typography>
                        <FacebookOutlinedIcon/>
                        <InstagramIcon/>
                        <WhatsAppIcon/>
                </Paper>



                <Stack mt={10} >
                    <Paper elevation={''} sx={{ minWidth: 250 }}>
                        <Typography pl={4}><h3> <StraightIcon/> Saytin Xeritesi</h3></Typography>
                        <Typography ><ArrowRightIcon />Esas sehife</Typography>
                        <Typography ><ArrowRightIcon />Temir</Typography>
                        <Typography ><ArrowRightIcon />Qurasdirma</Typography>
                        <Typography ><ArrowRightIcon />Usta sifarisi</Typography>

                    </Paper>
                </Stack>
                <Stack >
                    <Paper elevation={''} sx={{ minWidth: 250 }} >
                        <Typography><ArrowRightIcon /> Çatdırılma</Typography>
                        <Typography ><ArrowRightIcon /> Zəmanət</Typography>
                        <Typography ><ArrowRightIcon /> Haqqımızda</Typography>
                        <Typography ><ArrowRightIcon /> Əlaqə</Typography>
                    </Paper>
                </Stack>
                <Stack>
                    <Paper elevation={''} sx={{ minWidth: 250 }}>
                        <Typography pl={4}> <h3>< StraightIcon/>Elaqe</h3> </Typography>
                        <Typography pl={4}><LocalPhoneIcon />(+994 12) 565-1-565</Typography>
                        <Typography pl={4}><LocalPhoneIcon />(+994 12) 565-2-565</Typography>
                        <Typography pl={4}><LocalPhoneIcon />(+994 55) 222-32-46</Typography>
                        <Typography pl={4}><LocalPhoneIcon />(+994 55) 222-34-19</Typography>
                    </Paper>
                </Stack>
                <Stack>
                    <Paper elevation={''} sx={{ minWidth: 250 }}>
                        <Typography> <LocalPhoneIcon />  Bakı ş., Şamaxı yolu 15-ci km.</Typography>
                        <Typography><MailOutlineIcon/>office@solitonservice.com</Typography>
                    </Paper>
                </Stack>
            </Stack>





        </PageContainer>

    )
}
export default About;