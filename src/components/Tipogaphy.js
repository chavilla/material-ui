import React from 'react';
import { Typography, ThemeProvider, makeStyles } from '@material-ui/core';
import theme from '../themeConfig'

const useStyles=makeStyles(theme=>({
    m5:{
        margin: "2rem"
    }
}))

const Tipography = () => {


    const classes=useStyles();

    return ( 
        <ThemeProvider theme={theme}>
            <Typography 
            variant="h2"
            align="center"
            color="primary"
            className={classes.m5}
            >Tipografías
            </Typography>

            <Typography
            variant="body1"
            >Hola</Typography>
        </ThemeProvider>
     );
}
 
export default Tipography;