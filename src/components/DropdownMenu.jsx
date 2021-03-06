import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import {useState} from 'react';

import { CSSTransition } from 'react-transition-group';
import react from 'react';

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick ={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
                >
                    <div className="menu">
                        <DropdownItem>My Profile</DropdownItem>
                        <DropdownItem
                            leftIcon={<CogIcon />}
                            rightIcon={<ChevronIcon />}
                            goToMenu="Settings"
                            >
                                Settings
                        </DropdownItem>
                    </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
                >
                    <div className="menu">
                        <DropdownItem
                            leftIcon={<ArrowIcon />}
                            goToMenu="main"
                            />
                        <DropdownItem>Settings</DropdownItem>
                    </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;