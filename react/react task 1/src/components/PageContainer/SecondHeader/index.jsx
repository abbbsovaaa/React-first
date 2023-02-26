import { Divider, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

const SecondHeader = () => {
  return (
      <Box
          sx={{
              backgroundColor: '#016BAF',
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
                  py={3}>
                  <Stack direction="row" gap={8} mb={{ xs: 1, md: 0 }}>
                      <Typography component="a" href="https://google.com">Esas sehife </Typography>
                      <Typography component="a" href="https://google.com">Temir</Typography>
                      <Typography component="a" href="https://google.com">Qurasdirma</Typography>
                      <Typography component="a" href="https://google.com">Usta sifarisi</Typography>
                      <Typography component="a" href="https://google.com">Catdirilma</Typography>
                      <Typography component="a" href="https://google.com">Zemanet</Typography>
                      <Typography component="a" href="https://google.com">Haqqimizda</Typography>
                      <Typography component="a" href="https://google.com">Elaqe</Typography>
                      <Typography component="a" href="https://google.com">AZ</Typography>
                  </Stack>
                  <Stack direction="row" gap={3} flexWrap="wrap">
                      <Stack direction="row" gap={1}>
                        
                          
                      </Stack>
                     
                  </Stack>
              </Stack>
          </Container>
      </Box>
    
  )

}

export default SecondHeader;