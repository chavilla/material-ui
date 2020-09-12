import React from 'react';
//List components
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
//Icons
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const Lista = () => {
    return ( 
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon></InfoIcon>
                    </ListItemIcon>
                    <ListItemText> Información</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ContactsIcon/>
                    </ListItemIcon>
                    <ListItemText> Contactos</ListItemText>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                       <LiveHelpIcon/>
                    </ListItemIcon>
                    <ListItemText> Escríbenos</ListItemText>
                </ListItem>
            </List>
        </div>
     );
}
 
export default Lista;
