import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';

import { CSSTransition } from 'react-transition-group';

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
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
                            rightIcon={<ChevronIcon />}>

                        </DropdownItem>
                    </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;