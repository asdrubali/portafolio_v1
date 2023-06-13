import { ChangeHistory, ExpandLess, Scale } from '@mui/icons-material'
import { Box, Button, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { TrianguloBack } from '../components/TrianguloBack'

export const ContactPage = () => {

  const { darkModeIsActive } = useSelector( state => state.portafolio );


  const gridsStyle = {
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }


  return (
    <Grid
    id='contacts' 
    container 
    item 
    direction='row'
    justifyContent='space-between'
    sx={{
        minHeight: '580px',
        overflow: 'hidden',
    }}
    >


      <Grid
        flexBasis='50%'
        sx={{
          ...gridsStyle,
          backgroundImage: ( darkModeIsActive ? "url('https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/fondoProjectsNoche_hnx5vu.png')" : "linear-gradient(90deg, rgba(218,255,255,1) 0%, rgba(220,234,228,1) 50%, rgba(252,229,255,1) 92%)" ),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >



        <Grid
          marginTop='3vh'
          paddingLeft='3%'
          width='100%'

        >   
        <Typography
          component='h3'
          variant='h3'
          width='100%'
          align='center'
          sx={{
            fontWeight: '800',
            fontSize: '50px',
            color:'primary.contrastText',
            fontFamily:'typography.fontFamily',
            fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3.5rem'},  
          }}
        >Contacto</Typography>


        </Grid>         
       </Grid>



      <Grid
        container
        position='relative'
        display='flex'
        flexBasis='50%'
        overflow='hidden'
        sx={{
          color: '#4e4e4e',
        }}
      >

          <Box
            sx={{
              position: 'absolute',
              zIndex:'0',
              position:'absolute',
              opacity:'.5',
              width:'60%',
              height:'60%',
              top:'-13%',
              left:'61%',
              backgroundColor:'primary.contrastText'
          }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              zIndex: '1',
              opacity: '.3',
              width: '60%',
              height: '60%',
              top: '-21%',
              left: '70%',
              backgroundColor:'secondary.light'
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              zIndex: '3',
              opacity: '.5',
              width: '60%',
              height: '60%',
              top: '-30%',
              left: '79%',
              backgroundColor:'secondary.dark'
          }}
          ></Box>        
          <Box
            sx={{
              position: 'absolute',
              zIndex:'0',
              position:'absolute',
              opacity:'.5',
              width:'60%',
              height:'60%',
              top:'53%',
              left:'-5%',
              backgroundColor:'primary.contrastText'
          }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              zIndex: '1',
              opacity: '.3',
              width: '60%',
              height: '60%',
              top: '60%',
              left: '-14%',
              backgroundColor:'secondary.light'
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              zIndex: '3',
              opacity: '.5',
              width: '60%',
              height: '60%',
              top: '69%',
              left: '-24%',
              backgroundColor:'secondary.dark'
          }}
          ></Box>




        <Box 
          zIndex='7'
          width='100%'
        >
          <Typography
            component='h3'
            variant='h3'
            width='100%'
            align='center'
            marginBottom='2%'
            sx={{
              fontWeight: '800',
              fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3.5rem'},
              color:'primary.contrastText',
              fontFamily:'typography.fontFamily'
            }}
          >Experiencia</Typography>
        
          <Box 
            sx={{
              margin: '0 auto',
              width: { xs: '80%', sm: '80%', md: '60%'},
              height: { xs: '300px', sm: '350px', md: '450px'},
              borderRadius: '5px',
              backgroundColor: 'customColor.backBoxAlter',
              boxShadow:  ( darkModeIsActive ? '0 0 6px rgba(255, 255, 255, .3)' : '0 2px 6px rgba(0, 0, 0, .7)')
            }}
          >
            <Grid
            container
            display='flex'
            direction='column'
            alignItems='center'
            margin='0 auto'
            sx={{
              height: '200px',
              width: '100%',
              borderBottom: '1px solid rgba( 200, 200, 200, .5 )',
            }}
          >

            <Box
              sx={{
                marginTop: '5%',
                borderRadius: '9999px 9999px',
                overflow: 'hidden',
                width: { xs: '35%', sm: '30%', md: '25%'},
                position: 'relative',
              }}
            >
              <CardMedia
                  component='img'
                  image='https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/atentoLogo_oqexqm.png'
                  sx={{
                    width:'100%',
                    transform: 'Scale(1.6)'
                  }}
              />
            </Box>
            <Box  
              minWidth= '100%'
              sx={{
                padding: '4%',
                boxSizing: 'border-box',
              }}
            >
              <Grid
                width='100%'
                container
                direction='column'
                justifyContent='flex-start'
                paddingLeft='10%'
              >
              <Typography 
                variant="h3" 
                component="div"
                sx={{
                  fontSize: { xs: '.7rem', sm: '1rem', md: '1.1rem'},
                  fontWeight: '400',
                  color: 'primary.contrastText',
                  fontFamily: 'typography.fontFamily',
                }}
                >
                  <strong>Puesto: </strong>dasdasdasdasdas
              </Typography>

              <Typography 
                variant="p"
                width='100%' 
                sx={{
                  fontSize: { xs: '.7rem', sm: '1rem', md: '1.1rem'},
                  color: 'primary.contrastText',
                  fontFamily: 'typography.fontFamily',
                  wordWrap: 'break-word'
                }}
                >
                <strong>Empresa: </strong> asdasdsadasdasdasdasd
              </Typography>
                
              </Grid>
            </Box>
            </Grid>
            

        


          </Box>
        </Box>

      </Grid>
        
    </Grid>
    
  )
}
