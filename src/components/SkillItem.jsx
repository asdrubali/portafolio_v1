import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const SkillItem = ({ entorno, icon, tecnologias = [], }) => {


  return (
    <Grid
    container
    marginTop='6vh'
    direction='row'
  >
    <Box
      sx={{
        flexBasis: '18%',
        alignSelf: 'self-start',
      }}
    >
      <img 
        src={ icon } 
        alt={'Icon' + toString(entorno)}  
        className='iconSkills'
        />
    </Box>
    <Grid
      paddingLeft='10px'
      sx={{
        flexBasis: { xs: '70%', sm: '45%'}
      }}
    >
      <Typography
        component='h3'
        variant='h3'
        sx={{
          fontSize: { xs: '.9rem', sm: '1.2rem', md: '1.5rem'},
          fontWeight: '900',
          fontFamily:'inherit',
          fontFamily:'typography.fontFamily'
        }}
      >{ entorno } :</Typography>
        <Grid
          container
          direction='column'
          justifyContent='space-around'
        >
            {
                tecnologias.map( ( tecnologia ) => (
                    <Typography
                        key={ tecnologia }
                        paddingTop='3%'
                        component='h4'
                        variant='h4'
                        sx={{
                        fontSize: { xs: '.7rem', sm: '.9rem', md: '1.1rem'},
                        fontWeight: '600',
                        fontFamily:'inherit',
                        fontFamily:'typography.fontFamily'
                        }}
                    > &middot; { tecnologia }</Typography>              
                    ))
            }

        </Grid>
    </Grid>
  </Grid>
  
  )
}
