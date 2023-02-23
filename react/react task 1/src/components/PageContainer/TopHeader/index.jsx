import { Divider, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TopHeader = () => {
  return (
      <Box
          sx={{
              backgroundColor: '#2B343B',
             '&  p': {
                  color: 'white'
              },
              '& *': {
                  color: 'white',
                      
                  textDecoration: 'none'
              },
          }}
      >
          <Container maxWidth="lg">
              <Stack
                  direction={{ xs: 'column', md: "row" }}
                  justifyContent="space-between"
                  alignItems='center'
                  py={2}>
                  <Stack direction="row" gap={4} mb={{ xs: 1, md: 0 }}>
                      <Typography component="a" href="https://google.com">Servis məntəqələrimiz</Typography>
                      <Typography component="a" href="https://google.com">Tez-tez verilən suallar</Typography>
                  </Stack>
                  <Stack direction="row" gap={2} flexWrap="wrap">
                      <Stack direction="row" gap={1}>
                          <EmailIcon />
                          <Typography> office@solitonservice.com</Typography>
                      </Stack>
                      <Divider sx={{ bgcolor: 'white', width: 2 }} orientation="vertical" flexItem />
                      <Stack direction="row" gap={1}>
                          <FacebookIcon />
                          <InstagramIcon />
                          <WhatsAppIcon />
                      </Stack>
                  </Stack>
              </Stack>
          </Container>
      </Box>
    
  )

}

export default TopHeader;