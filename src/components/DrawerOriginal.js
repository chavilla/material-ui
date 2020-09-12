import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core';
import Listas from './Listas';

const drawerWidth=240;

const useStyles=makeStyles(theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper:{
        width: drawerWidth
    }

}));

const DrawerOriginal = (props) => {

    const classes=useStyles();
    
    return ( 
        <Drawer className={classes.drawer} variant={props.variant} classes={{ paper: classes.drawerPaper }} 
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <Listas/>
        </Drawer>
     );
}
 
export default DrawerOriginal;