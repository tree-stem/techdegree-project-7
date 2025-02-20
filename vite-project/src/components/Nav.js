import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <NavLink to='/cats'>Cats</NavLink>
            <NavLink to='/dogs'>Dogs</NavLink>
            <NavLink to='/computers'>Computers</NavLink>
        </nav>
    );
}

export default Nav;