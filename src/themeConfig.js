import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

const Theme =createMuiTheme({
    palette:{
        primary:{
            main: blue[500],
        },
        secondary:{
            main: grey[700]
        }
    },
    typography:{
        fontSize:14,
        color: '#fe4918'
    },
    spacing: 4
});

Theme.spacing(9);

export default Theme;