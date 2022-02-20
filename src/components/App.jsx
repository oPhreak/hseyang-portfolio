import React from 'react';
import Navbar from './Navbar.jsx';
import NavItem from './NavItem.jsx';
import DropdownMenu from './DropdownMenu.jsx';

import '../index.css';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';


function App() {
    return (
        <Navbar>
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<PlusIcon />} >
                <DropdownMenu />
            </NavItem>
        </Navbar>
    );
}

export default App;