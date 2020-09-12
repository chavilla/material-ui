import React from 'react';
import { Menu, MenuList, MenuItem } from '@material-ui/core';

const MenuComponent = () => {
    return ( 
        <Menu>
            <MenuList>
                <MenuItem>Inicio</MenuItem>
                <MenuItem>Información</MenuItem>
                <MenuItem>Acerca De</MenuItem>
            </MenuList>
        </Menu>
     );
}
 
export default MenuComponent;