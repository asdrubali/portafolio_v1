import { ThemeProvider } from "@emotion/react"; 
import { CssBaseline } from "@mui/material"; 
import { darkTheme } from "./darkTheme"; 
import { lightTheme } from "./lightTheme";
import { useSelector } from "react-redux";


export const AppTheme = ({ children }) => {

  const { darkModeIsActive } = useSelector( state => state.portafolio )

  return (
    <ThemeProvider theme={ darkModeIsActive ? darkTheme : lightTheme }>
     
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}
