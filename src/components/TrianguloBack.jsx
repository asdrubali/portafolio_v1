import { ChangeHistory } from '@mui/icons-material'
import { Box, Grid, IconButton } from '@mui/material';
import React from 'react'

export const TrianguloBack = ({ cant, color, min = 30 , max = 200, op = 0.4}) => {

    let i = 0;
    const fondoRend = []

    while (i < cant ) {
        const randomSize = Math.floor(Math.random() * (max- min + 1)) + min;
        const top = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        const left = Math.floor(Math.random() * (100- 0 + 1)) + 0;
    
        const triangStyle = { 
            color: { color }, 
            fontSize: `${ randomSize }px`, 

        }

        const boxStyle = {
            position: 'absolute',
            opacity: op,
            top: `${ top }%`, 
            left: `${ left }%`, 
            transform: `rotate(${ randomSize }deg)`,
            
        }

        fondoRend.push( <Box sx={ boxStyle }> <ChangeHistory className={ ( randomSize % 2 === 0 ) ? 'rotateTriangle' : 'rotateTriangleReverse'} sx={{...triangStyle }} /> </Box> )
        i++
    }


  return (
    <>
        {fondoRend}
    </>
  )
}
