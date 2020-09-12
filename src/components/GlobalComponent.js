import React from 'react';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeConfig';

const GlobalComponent = () => {
    return ( 
        <>
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
                primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </ThemeProvider>
        
        </>
     );
}
 
export default GlobalComponent;