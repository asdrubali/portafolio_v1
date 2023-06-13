import React, { useRef } from 'react'
import { AppTheme } from './theme/AppTheme'

import { NavBar } from './components'
import { HomePage, AboutMePage, ContactPage, ProjectPage, SkilsPage } from './pages'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { ButtobTop } from './components/ButtobTop'


export const PortafolioApp = () => {

  const bodyStyle = {
    backgroundColor: 'primary.main',
    height:'100%',

  }

  return (  
      <AppTheme >
          <Box 
            position='relative'
            sx={bodyStyle} >
            <NavBar /> 
            <HomePage  />
            <AboutMePage />
            <SkilsPage />
            <ProjectPage/>
            <ContactPage/>
          </Box>  
          <ButtobTop />
      </AppTheme>
    )
}
