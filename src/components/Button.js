import React from 'react';
import {Button} from '@material-ui/core';
import  DeleteIcon  from '@material-ui/icons/Delete';

const Buttons = () => {
    return ( 
        <>
        {/*Botones normales*/}
        <Button
        variant="contained"
        color="secondary"
        fullWidth
        >
            botón secondary
        </Button>
        <br/><br/>

        <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon/>}
        >
            botón primary
        </Button>
        <br/><br/>

        <Button
        >
            botón primary
        </Button>

        <hr/>
        </>
     );
}
 
export default Buttons;
