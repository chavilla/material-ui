import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import  DeleteIcon  from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const Icons = () => {
    return ( 
        <>
            

            <IconButton
                variant="contained"
                color="primary"
            >
                <DeleteIcon/>
            </IconButton>

            <div>
            <ChevronLeftIcon
            onClick={()=>{
                alert('Has pulsado el ícono chevron')
            }}
            paddingTop
            style={{ paddingTop:55 }}
            ></ChevronLeftIcon>
            </div>
        </>
     );
}
 
export default Icons;