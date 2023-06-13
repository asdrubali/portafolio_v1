import { List, Opacity } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LinearProgressWithLabel } from '../components/ProgresBar'
import { useSelector } from 'react-redux'
import { SkillItem } from '../components/sKILLiTEM.JSX'

export const SkilsPage = () => {

  const { darkModeIsActive } = useSelector( state => state.portafolio )


  const tecnnologias = {
        backend: [
          {
            entorno: 'JavaScript' ,
            icon: 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632463/jsIconMed_achdcy.svg' ,
            tecnologias: ['NodeJS', 'TypeScript', 'APIs Rest'] 
          },
          {
            entorno: 'Python' ,
            icon: 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632463/pythonIco_fxg06q.svg' ,
            tecnologias: ['Fast API', 'NumPy', 'Pandas'] 
          },
          {
            entorno: 'Bases de datos' ,
            icon: ( darkModeIsActive ? 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/dbIco_dbb5qs.png' : 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632461/dbIcoLight_nwuxv0.png'),
            tecnologias: ['PosgreQSL', 'MySQL', 'MongoDB', 'Firebase' ] 
          },
        ],
        frontend: [
          {
            entorno: 'Bases de la WEB' ,
            icon: 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/htmlIco_uvgyld.svg' ,
            tecnologias: ['HTML', 'CSS', 'JavaScript' , 'Sass', 'Bootstrap', 'OAuth', 'JWT', 'Owasp'] 
          },
          {
            entorno: 'React' ,
            icon: 'https://res.cloudinary.com/duugow4oz/image/upload/v1686632463/reactIco_vnljht.svg' ,
            tecnologias: ['Redux', 'Context', 'Hooks' ,'Material UI'] 
          },
        ],
  }

  const gridsStyle = {
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'primary.main' ,
          color: 'primary.contrastText' ,
        }

  return (
    <Grid
    id='skils'
    container 
    item 
    direction='row'
    justifyContent='space-between'
    fontFamily='typography.fontFamily'
    sx={{
        minHeight: '500px',
        backgroundColor: '#fff',
    }}
    >
        <Grid
          container
          className='skills-Cont'
          flexBasis='50%'
          direction='column'
          fontFamily='typography.fontFamily'
          sx={{
            backgroundImage: "url('https://res.cloudinary.com/duugow4oz/image/upload/v1686632462/fondoBack_i2tswg.png')",
            ...gridsStyle,
          }}
        >
          <Typography
            component='h2'
            variant='h2'
            align='right'
            width='100%'
            sx={{
              fontWeight: '600',
              fontSize: { xs: '1.7rem', sm: '2.5rem', md: '3.5rem'},
              marginTop: '3%',
              paddingRight:'4px',
              fontFamily:'typography.fontFamily',
              color: 'primary.contrastText',
              
            }}

          >Habili</Typography>

          <Typography
            component='h3'
            variant='h3'
            width='100%'
            sx={{
              fontFamily:'typography.fontFamily',
              color: 'primary.contrastText',
              fontStyle: 'italic',
              fontWeight: '500',
              fontSize: { xs: '1.5rem', sm: '2.3rem', md: '3.2rem'},
              textIndent: '4%',
            }}
          >Backend</Typography>

          <Grid
            paddingLeft='3%'
            width='100%'

          >
            {
              tecnnologias.backend.map( ( entorno ) => (
                  <SkillItem { ...entorno } darkModeIsActive={darkModeIsActive} />
              ))
            }
          </Grid>

        </Grid>


      {/* Frontend */}
        <Grid
          container
          flexBasis='50%'
          direction='column'
          sx={{
            ...gridsStyle,
            backgroundImage: "url('https://res.cloudinary.com/duugow4oz/image/upload/v1686632463/fondoFrontTran_z9cj46.png')",
            backgroundColor: 'primary.dark',
            color: 'secondary.contrastText'
          }}
        >

          <Typography
            component='h2'
            variant='h2'
            align='left'
            width='100%'
            fontFamily='typography.fontFamily'
            sx={{
              fontWeight: '600',
              color: 'secondary.contrastText',
              marginTop: '3%',
              fontSize: { xs: '1.7rem', sm: '2.5rem', md: '3.5rem'},
            }}
          >dades</Typography>

          <Grid
            marginTop='3vh'
            paddingLeft='3%'
            width='100%'

          >
            {
              tecnnologias.frontend.map( ( entorno ) => (
                  <SkillItem { ...entorno }/>
              ))
            }

          </Grid>          


          <Typography
            component='h3'
            variant='h3'
            width='100%'
            align='right'
            marginTop='3%'
            fontFamily='typography.fontFamily'
            sx={{
              fontStyle: 'italic',
              fontWeight: '500',
              paddingRight: '4%',
              paddingBottom: '4%',
              color: 'secondary.contrastText',
              fontSize: { xs: '1.5rem', sm: '2.3rem', md: '3.2rem'},
            }}
          >Frontend</Typography>
        </Grid>
    </Grid>
    
  )
}
