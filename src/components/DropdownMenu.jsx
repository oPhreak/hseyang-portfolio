

function DropdownMenu() {

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
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
                leftIcon={<CogIcon />}
                rightIcon={<ChevronIcon />}>

            </DropdownItem>
        </div>
    );
}

export default DropdownMenu;