import react from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import NavItem from './NavItem.jsx';
import '../index.css';


function App() {
    return (
        <Navbar>
            <NavItem icon=":)" />
            <NavItem icon="">
                <p>test item</p>
            </NavItem>
        </Navbar>
    );
}

export default App;