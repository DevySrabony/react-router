import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <nav>
                <h1>My website</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Post</NavLink>
            </nav>
        </div>
    );
};

export default Header;