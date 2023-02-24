import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <Box
            my={5}
            component="header"
            sx={{
                '& .phone_call_180': {
                    width: 140,
                    height: 60,
                    background: 'linear-gradient(135deg, #F32735 , #A7111C )',
                    color: 'white',
                    fontSize: '28px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    textDecoration: 'none'
                }
            }}
        >
            <Container maxWidth="lg">
                <Stack direction={{ xs: "column", md: 'row' }} alignItems="center" justifyContent="space-between">
                    <img src={logo} alt="" />
                    <Grid container my={{ xs: 2, md: 'unset' }} justifyContent="center" gap={5} alignItems="center">
                        <Grid item >
                            <Stack direction='row'> <LocalPhoneOutlinedIcon /> (+994 12) 565-1-565</Stack>
                            <Stack direction='row'> <LocalPhoneOutlinedIcon /> (+994 55) 222-34-19</Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction='row'> <LocalPhoneOutlinedIcon /> (+994 12) 565-2-565</Stack>
                            <Stack direction='row'> <LocalPhoneOutlinedIcon /> (+994 55) 222-32-46</Stack>
                        </Grid>
                    </Grid>
                    <Typography component="a" href="tel:180" className="phone_call_180">
                        <SettingsPhoneOutlinedIcon />
                        180
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}
export default Header;
