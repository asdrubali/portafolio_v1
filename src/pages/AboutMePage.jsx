import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, colors } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const AboutMePage = () => {

  const { darkModeIsActive } = useSelector( state => state.portafolio )

  const contentStyle = {
    
    height: { xs: '400px', sm: '550px', md: '650px'},
    overflow: 'hidden',
    color: 'primary.contrastText',
}



  const bolaStytle = {
        opacity: '.4',
        Zindex: '1',
        position: 'absolute',
        borderRadius: '50%',
        background: ( darkModeIsActive ? 'radial-gradient(circle at 50% -20.71%, #ffe7d5 0, #ffe8d2 6.25%, #ffe9cf 12.5%, #ffebce 18.75%, #ffeccc 25%, #ffeecb 31.25%, #fcefcb 37.5%, #f7f1cc 43.75%, #f2f2cd 50%, #edf3cf 56.25%, #e7f5d1 62.5%, #e2f6d4 68.75%, #ddf7d7 75%, #d8f8db 81.25%, #d3f9df 87.5%, #cff9e3 93.75%, #cbfae8 100%);' 
                                       :'radial-gradient(circle at 92.68% 42.48%, #a7b7ff 0, #6385ff 25%, #1b53b5 50%, #002566 75%, #000024 100%);') 
        
  }

  return (

    <Grid
    container 
    id='aboutme'
    item 
    paddingTop= '2%' 
    maxWidth='100%'
    position='relative'
    sx={contentStyle}
    >

        <Box className='bola1'
          sx={ bolaStytle }
        ></Box> 
        <Box className='bola2'
          sx={ bolaStytle }
        ></Box> 
        <Box className='bola3'
          sx={ bolaStytle }
        ></Box>  
        <Box className='bola4'
          sx={ bolaStytle }
        ></Box>  
        <Box className='bola5'
          sx={ bolaStytle }
        ></Box>  
        <Box
         className='bola6'
          sx={ bolaStytle }
        ></Box>  
        <Box className='bola7'
          sx={ bolaStytle }
        ></Box>  
        <Box className='bola8'
          sx={ bolaStytle }
        ></Box>  

      <Box
        zIndex='2' 
        sx={{
          width: '100%',
          minHeight: '100%',
        }}
      >
        
        <Grid
        container 
        item 
        direction='row'
        justifyContent='space-around'
        wrap='nowrap'
        sx={{
          minHeight: '100%',
          maxWidth: '100%',
      }}
      >

      <Grid
          sx={{
            flexBasis:{ xs: '35%', sm: '30%', md: '27%'} 
            
          }}
        >
          <Typography
            component='h2'
            variant='h2'
            fontWeight='600'
            marginTop='4%'
            marginBottom='3%'
            align='center'
            fontFamily='typography.fontFamily'
            color='customColor.dark'
            sx={{
              fontSize: { xs: '1.7rem', sm: '2.5rem', md: '3.5rem'}
            }}
          >
              About Me
          </Typography>

          <Box 
            sx={{ 
              maxWidth: '100%', 
              height: { xs: '40%', sm: '50%', md: '70%'},
              backgroundColor: 'inherit'
          }}
          >
          <Box 
            sx={{
              height: '100%',
            }}
          >
            <CardMedia
              component="img"
              image="/assets/images/personIco.png"
              alt="image"
              sx={{
                height: '70%',
                with: '100%',
              }}
            />

            <CardContent
              sx={{
                height: '30%'
              }}
            >
              <Typography 
                fontFamily='typography.fontFamily'
                color='customColor.dark' 
                gutterBottom variant="h5" 
                component="div" align='center'
                sx={{
                  fontSize: { xs: '.6rem', sm: '1rem', md: '1.5rem'}
                }}
                >  
                Lizard
              </Typography>
              <Typography 
                fontFamily='typography.fontFamily'
                color='customColor.dark' 
                variant="body2" 
                align='center' 
                sx={{
                  fontSize: { xs: '.5rem', sm: '.8rem', md: '1rem'}
                }}
                >
                Lizards are a widespread group of squamate reptiles, with over 6,000
              </Typography>
            </CardContent>

          </Box>

          </Box>
        </Grid>
        
        <Grid
          flexBasis='55%'
          container
          direction='column'
          justifyContent='space-around'
          paddingBottom='10vh'
          align='center'
        >
          <Box
            width='60%'
          >
            <Typography
              component='h5'
              variant='h5'
              fontSize='22px'
              fontWeight='600'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.6rem', sm: '1rem', md: '1.5rem'}
              }}
            >Lorem ipsum dolor sit, amet. </Typography>

            <Typography
              component='p'
              variant='p'
              fontWeight='200'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.5rem', sm: '.8rem', md: '1rem'}
              }}
            > 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur necessitatibus fugit recusandae quos 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>

          <Box
            alignSelf='flex-end'
            width='60%'
          >
            <Typography
              component='h5'
              variant='h5'
              fontSize='22px'
              fontWeight='600'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.6rem', sm: '1rem', md: '1.5rem'}
              }}
            >Lorem ipsum dolor sit, amet</Typography>
            <Typography
              component='p'
              variant='p'
              fontWeight='200'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.5rem', sm: '.8rem', md: '1rem'}
              }}
            > 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur necessitatibus fugit recusandae quos 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </Typography>
          </Box>

          <Box
            width='60%'
          >
            <Typography
              component='h5'
              variant='h5'
              fontSize='22px'
              fontWeight='600'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.6rem', sm: '1rem', md: '1.5rem'}
              }}
            >Lorem ipsum dolor sit, amet.</Typography>
            <Typography
              component='p'
              variant='p'
              fontWeight='200'
              fontFamily='typography.fontFamily'
              color='customColor.dark'
              sx={{
                fontSize: { xs: '.5rem', sm: '.8rem', md: '1rem'}
              }}
            > 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur necessitatibus fugit recusandae quos 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </Typography>
          </Box>
          


        </Grid>

        </Grid>

      </Box>

    </Grid>

  )
}
