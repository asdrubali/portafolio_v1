import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        primary:{
            main: '#e1e7ff', 
            light: '#fff', 
            dark: 'rgba(0, 0, 0, 0.2)', 
            contrastText: '#171717', 
        },
        secondary: {
            main: '#dbdbdb', 
            light: 'rgba(234,234,234, .6);', 
            dark: '#000',
            contrastText: '#000000',
          },    
          customColor: {
            dark: '#000',
            contrastTextPurple: '#6677cc',
            backBoxAlter: 'rgba(255, 255, 255, .6 )',
            principalBanner: '#fff'
          }
    },
    typography: {
        fontFamily: [
          'roboto mono',
        ].join(','),
    },
    breakpoints:{
      values:{
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
          breakPoint300: 330,
      }
  }
})


