import {  Grid, Typography } from '@mui/material'
import React from 'react'
import { ProjectItem } from '../components'
import { useSelector } from 'react-redux'
import { TrianguloBack } from '../components/TrianguloBack'

export const ProjectPage = () => {

  const { darkModeIsActive } = useSelector( state => state.portafolio )

  const projects = [
    {
      name: 'Control de inventario' ,
      description: 'React, NodeJS, PostgreSQl' ,
      imageUrl: 'https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/images/optimized/rev-5ff00a8/wp-content/uploads/2019/07/revision_entregables_planificacion_proyecto_web.jpg' ,
      projectUrl: '' ,
      gitUrl: '' ,
    },
    {
      name: 'Control de inventario' ,
      description: 'React, NodeJS, PostgreSQl' ,
      imageUrl: 'https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/images/optimized/rev-5ff00a8/wp-content/uploads/2019/07/revision_entregables_planificacion_proyecto_web.jpg' ,
      projectUrl: '' ,
      gitUrl: '' ,
    },
    {
      name: 'Control de inventario' ,
      description: 'React, NodeJS, PostgreSQl' ,
      imageUrl: 'https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/images/optimized/rev-5ff00a8/wp-content/uploads/2019/07/revision_entregables_planificacion_proyecto_web.jpg' ,
      projectUrl: '' ,
      gitUrl: '' ,
    },
    {
      name: 'Control de inventario' ,
      description: 'React, NodeJS, PostgreSQl' ,
      imageUrl: 'https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/images/optimized/rev-5ff00a8/wp-content/uploads/2019/07/revision_entregables_planificacion_proyecto_web.jpg' ,
      projectUrl: '' ,
      gitUrl: '' ,
    },
  ]

  const projectPageStyle = {
            paddingTop: '3%',
            minHeight: '550px',
            color: ( darkModeIsActive ? '#eee' : '#000' ),
            backgroundColor: ( darkModeIsActive ? '#000' : '' ),
            flexDirection: { xs: 'column', sm: 'row'}
          }

  return (
    <Grid
    id='projects'
    container 
    item 
    wrap='nowrap'
    justifyContent='center'
    sx={ projectPageStyle }
    >
      <Grid
        margin='auto 0'
        sx={{
          paddingTop: { xs: '', sm: '20%'},
          paddingLeft: { xs: '2%', sm: ''},
          width:{ xs: '100%', sm: '7%'},
        }}
      >
        <Typography
          component='h2'
          variant='h2'
          fontWeight='600'
          align='center'
          color='primary.contrastText'
          fontFamily='typography.fontFamily'
          sx={{
            transform: { xs: '', sm: 'rotate(270deg)'},
            fontSize: { xs: '1.7rem' , sm: '5rem', md: '6rem'}
          }}
        >
          Proyectos
        </Typography>
      </Grid>

      <Grid
        flexBasis='100%'
        container
        justifyContent='space-around'
        wrap='wrap'
        paddingTop='2%'
        position='relative'
        overflow='hidden'
      >

        <TrianguloBack cant={50} color='secondary.dark' op={.2}/>
        {
          projects.map( (project) => ( 
            <ProjectItem key={ project.name } { ...project } darkIsActive = { darkModeIsActive } />
           ))
        }

      </Grid>       
    </Grid>
    
  )
}
