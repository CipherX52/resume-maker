import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItems(props) {
    return (
        <div id="menu">
            < ul >
                <li className="menuToggle"><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </div>
    );
}

export default HeaderItems;