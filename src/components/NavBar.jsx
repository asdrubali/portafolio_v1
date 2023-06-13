import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Grid, Menu, MenuItem } from '@mui/material';
import { Brightness4, Brightness7, LightMode, Lightbulb, List, LogoutOutlined, MenuOutlined, NightsStay, Padding, TipsAndUpdates } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { enableDisableDarkMode } from '../store';

const pages = ['Home', 'About Me', 'Skils', 'Projects', 'Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavBar = () => {
    
  const { darkModeIsActive } = useSelector( state => state.portafolio )

  const [anchorElNav, setAnchorElNav] = useState  (null);

  const dispatch = useDispatch();

  const navBarStyle = {
    height: '45px', 
    backgroundColor: 'primary.light' ,
    color: 'primary.contrasText',
  }

  const onClickNavbar = (element) => {

    handleCloseNavMenu()

    setTimeout(() => {
      const elementDOM = document.querySelector(`#${element}`)
      elementDOM?.scrollIntoView({ behavior: 'smooth' });
    }, 300)


  }

  const onChangeTheme = () => {
    dispatch( enableDisableDarkMode() )
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log('paso');
  };

  return (
    <AppBar position="relative" sx={{...navBarStyle}} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ minHeight: 'auto !important'  }} >
           
          {/* <Typography
            variant="h5"
            noWrap
            component="h2"
            height='auto'
            sx={{
              mr: 2,
              // display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontSize: '35px',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography> */}

          {/* <Box sx={{ flexGrow: 1, display:  }}>

          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlined  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} sx={{backgroundColor: 'primary.light', color: 'primary.contrastText'}} onClick={() =>{ onClickNavbar( page.replace(/\s+/g, '').toLocaleLowerCase() ) } } >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display:{ xs: 'none', sm: 'flex' }, justifyContent: 'end', height:'auto' }}>

            {pages.map((page) => (
                <Button
                  className='onMouseHover'
                  key={page}
                  onClick={ () => onClickNavbar( page.replace(/\s+/g, '').toLocaleLowerCase() ) }
                  autoCapitalize='words'
                  sx={{ 
                    my: 2, 
                    color: 'primary.contrastText', 
                    display: 'block',
                    fontFamily: 'typography.fontFamily',
                    fontWeight: '500',
                    fontSize: '18px',
                    padding: '0 10px',
                    margin: '0',
                    textTransform: 'capitalize',
                    }}
                >
                  {page}
                </Button>
              ))}
          </Box>

          <IconButton 
            onClick={ onChangeTheme }
            sx={{
              marginLeft: '15px'
            }}
          >
            {
              darkModeIsActive ? <LightMode className='onMouseHover' sx={{ color: 'primary.contrastText' }} />
                               : <NightsStay className='onMouseHover' sx={{ color: 'primary.contrastText' }} /> 
            }
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

