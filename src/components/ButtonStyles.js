import React from 'react';
import { Typography, Button } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles({
    btn:{
        background: 'linear-gradient(#1ABC9C,#52BE80)',
        color: 'white'
    }
})

function ButtonStyles (){
    const classes=useStyle();

    return ( 
        <div>
            <Typography 
            variant="h2" 
            align="center"
            paragraph="true"
            >Desde botones styles</Typography>

            <Button className={classes.btn}>
                Botón personalizado
            </Button>
        </div>
     );
}
 
export default ButtonStyles;