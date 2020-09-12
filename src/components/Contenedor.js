import React , { useState } from 'react';
import { makeStyles, Hidden} from '@material-ui/core';
import Navbar from './Navbar';
import DrawerOriginal from './DrawerOriginal';

const useStyles=makeStyles(theme=>({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        minHeight:'100vh',
        backgroundColor: '#eeeeee',
        padding: theme.spacing(3)
    }
}));

const Contenedor = () => {

    const classes=useStyles();

    const [open,setOpen]=useState(false);

    const handleDrawerOpen=()=>{
        setOpen(!open);
    }

    return ( 
        <div className={classes.root}>
            <Navbar
             handleDrawerOpen={handleDrawerOpen}
            />
            <Hidden xsDown>
                <DrawerOriginal
                variant='permanent'
                open={true}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerOriginal
                variant='temporary'
                open={open}
                onClose={handleDrawerOpen}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}>
                </div>
                Hola
            </div>
        </div>
     );
}
 
export default Contenedor;