import { ExpandLess } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const ButtobTop = () => {

    const [activeButtonTop, setActiveButtonTop] = useState(null);
    const { darkModeIsActive } = useSelector( state => state.portafolio );

    const ButtonStyle = { 
        backgroundColor: 'secondary.main', 
        color:  'secondary.contrastText',
        
        borderRadius: '100%',
        border: '1px solid rgba(0, 0, 0, .7 )'
    }


    const onScroll = () => {
        setActiveButtonTop( window.scrollY )
    }

    window.addEventListener('scroll', onScroll)
    
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box
            className='onMouseHover'
            position='fixed'
            zIndex='9999'
            sx={{
                borderRadius: '100%', 
                width: 'auto' ,
                top: '88%',
                left: '94%',
                opacity: '.5',
                display: ( (activeButtonTop > 400) ? '' : 'none' )
            }}
        >
            <IconButton 
                aria-label="ToTop" 
                size='large'
                color='#fff'
                variant="outlined"
                onClick={ scrollToTop }
                sx={{ borderRadius: '100%'}}
            >
                <ExpandLess fontSize='large' sx={ ButtonStyle } />
            </IconButton>
        </Box>
    )
    }
