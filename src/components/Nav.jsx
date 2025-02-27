import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            {/* Create links for each list item */}
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;