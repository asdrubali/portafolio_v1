import { GitHub, OpenInFull } from "@mui/icons-material"
import { Box, Button, CardContent, CardMedia, Grid, IconButton, Link, Typography } from "@mui/material"

export const ProjectItem = ({ name, description, imageUrl, projectUrl, gitUrl, darkIsActive = false }) => {

    const cardStyle ={ 
        flexBasis: '40%' , 
        height: { xs: '180px',breakPoint300: '200px', sm: '38%'},  
        marginBottom: { xs: '4%', sm: ''},  
        overflow: 'hidden',
        // Color: ( darkIsActive ? '#6677cc' : '#5e5e5e'),
        borderRadius: '8px' ,
        backgroundColor: 'primary.light',
        boxShadow:  ( darkIsActive ? '0 0 4px rgba(255, 255, 255, .3)' : '0 2px 6px rgba(0, 0, 0, 0.2)')
        }

        // height: 250px;
        // margin-bottom: 4%;

  return (
    <Grid 
    sx={ cardStyle }
        >
    <Box     
      height='80%'
    >
      <CardMedia
        paddingTop='10px'
        component="img"
        image={ imageUrl }
        alt={name}
        sx={{
          borderRadius: '8px' ,
          height:{ xs: '50%', sm: '70%'},
        }}
      />
      <CardContent
        sx={{
          padding: '5px !important',
          fontFamily: 'typography.fontFamily'
        }}
      >
        <Typography 
          variant="h3" 
          component="div"
          sx={{
            fontSize: { xs: '.8rem', breakPoint300: '1rem', sm: '1.3rem', md: '1.7rem'},
            fontWeight: '600',
            paddingLeft: '2%',
            // color: ( darkIsActive ? '#6677cc' : '#1e1e1e'),
            color: 'customColor.contrastTextPurple' ,
            fontFamily: 'typography.fontFamily'
          }}
          >
            { name }
        </Typography>
        <Typography 
          variant="p" 
          sx={{
            paddingLeft: '4%',
            fontSize: { xs: '.5rem', breakPoint300: '.6rem', sm: '.8rem', md: '1.1rem'},
            // color: ( darkIsActive ? '#ccc' : '#1e1e1e'),
            color: 'prymary.contrastText' ,
            fontFamily: 'typography.fontFamily'
          }}
          >
           <strong>Tecnologias Empleadas: </strong> { description }
        </Typography>
      </CardContent>
    </Box>

    <Grid
      textAlign='end'
      paddingRight='5%'
     >
      <IconButton className="onMouseHover" variant="outlined" size="small" sx={{ marginTop: '5%' }} component={Link} href={ projectUrl } target="_blank"  >
        <OpenInFull sx={{ fontSize: { xs: '1rem',breakPoint300: '1.2rem', sm: '1.4rem', md: '1.7rem'}, color:'customColor.contrastTextPurple' }}  />
      </IconButton>
      <IconButton className="onMouseHover" size="small" sx={{ marginTop: '5%'  }} component={Link} href={ gitUrl } target="_blank" >
        <GitHub sx={{ fontSize: { xs: '1rem',breakPoint300: '1.2rem', sm: '1.4rem', md: '1.7rem'},  color:'customColor.contrastTextPurple' }} />
      </IconButton>
    </Grid>
  </Grid>

  )
}
