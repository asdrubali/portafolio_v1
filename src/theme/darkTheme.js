import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        primary:{
            main: '#000000', // Negro
            light: '#171717', // Gris Casi Negro
            dark: 'rgba(0, 0, 0, 0.4)', // Negro transparente
            contrastText: '#cccccc', // Gris claro casi blanco
        },
        secondary: {
            main: '#fff', // Gris claro sirve de fondo
            light: 'rgba(234,234,234, .6);', // Gris claro con transparencia sirve para color de los backgrounds
            dark: '#eaeaea',
            contrastText: '#000000', // NegrO, sirve para las letras en fondos claros
        },
        customColor: {
          // main: 'radial-gradient(circle at 92.68% 42.48%, #a7b7ff 0, #6385ff 25%, #1b53b5 50%, #002566 75%, #000024 100%)', // Circulos con degradados azul azul claro y blanco en modo dark
          // light: 'radial-gradient(circle at 50% -20.71%, #ffe7d5 0, #ffe8d2 6.25%, #ffe9cf 12.5%, #ffebce 18.75%, #ffeccc 25%, #ffeecb 31.25%, #fcefcb 37.5%, #f7f1cc 43.75%, #f2f2cd 50%, #edf3cf 56.25%, #e7f5d1 62.5%, #e2f6d4 68.75%, #ddf7d7 75%, #d8f8db 81.25%, #d3f9df 87.5%, #cff9e3 93.75%, #cbfae8 100%)', // Circulos conm degradado de grices azul y blanco en modo dark
          dark: '#fff',
          contrastTextPurple: '#6677cc', // Purpura con un tono claro, util para textos en modo dark
          backBoxAlter: 'rgba(0, 0, 0, .6 )',
          principalBanner: '#fff'
        }
    },
    typography: {
        fontFamily: [
            'roboto mono'
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


