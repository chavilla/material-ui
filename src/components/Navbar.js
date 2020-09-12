import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, ThemeProvider, Button} from '@material-ui/core/';
import DehazeIcon from '@material-ui/icons/Dehaze';
import theme from '../themeConfig';

const useStyles=makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    ancho:{
        backgroundColor: "#fe4918 !important"
    },

    title:{
        flexGrow:1
    },

    btnText:{
        color: "#ffffff"
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${240}px)`,
        marginLeft: 240
        }
    },
    hide: {
        display: 'none',
      }
}))

const Navbar = ({handleDrawerOpen}) => {

    const classes=useStyles();

    return ( 
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" 
                    className={classes.menuButton}
                    onClick={ handleDrawerOpen }
                    >
                       <DehazeIcon/>
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Chaviweb
                    </Typography>
                    <Button variant="outlined" color="primary" className={classes.btnText}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
            <div className={classes.offset}></div>
        </div>
     );
}
 
export default Navbar;