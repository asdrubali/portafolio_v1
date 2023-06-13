import { Box, CardMedia, Grid, Typography } from "@mui/material"

import { useSelector } from "react-redux"

export const HomePage = () => {

    const { darkModeIsActive } = useSelector( state => state.portafolio )

    const banerStyle ={
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: ( darkModeIsActive ?  "url('https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/banerHomeDark_spalrt.png')" : "url('https://res.cloudinary.com/duugow4oz/image/upload/v1686632464/BanerHome_btrqfw.png')"),
    }

  return (
    <Grid 
        container 
        item 
        sx={{
        minHeight:{ xs: '250px', sm: '350px', md: '450px'},
            marginBottom: '8%'

        }}
    >

        <Grid
            container 
            item 
            marginTop='4%'
            direction='row'
            justifyContent='space-between'
            padding='0 4%'
            sx={ banerStyle }
        >

            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignContent='center'
                alignSelf='start'
                flexBasis='40%'
                maxHeight='55%'
                marginTop='8%'
                padding='2%'
                sx={{
                    backgroundColor:  'primary.dark',
                    minWidth:{ xs: '45%', sm: '40%', md: '30%'}
                }}
            >
                <Typography
                    component='h2'
                    variant="h2"
                    fontWeight='600'
                    paddingBottom='1%'
                    color='customColor.principalBanner'
                    fontFamily='typography.fontFamily'
                    sx={{
                        fontSize:{ xs: '1.7rem', sm: '2.5rem', md: '3.5rem'}
                    }}
                    
                >
                    Titulo Titsulos
                </Typography>

                <Typography
                    component='p'
                    variant="p"
                    paddingBottom='1%vh'
                    color='customColor.principalBanner'
                    fontFamily='typography.fontFamily'
                    sx={{
                        fontSize:{ xs: '.5rem', sm: '.8rem', md: '1rem'}
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.    
                </Typography>
            </Box>

        <Box 
            paddingTop='6vh'
            flexBasis='35%'
            paddingRight='5%'
            sx={{
                maxHeight:{ xs: '70%', md: '80%'}
            }}
        >
            <img src="https://res.cloudinary.com/duugow4oz/image/upload/v1686632464/personIco_js2gmx.png" alt="imagen" width='100%' height='100%' />
        </Box>
        </Grid>
    </Grid>
  )
}
