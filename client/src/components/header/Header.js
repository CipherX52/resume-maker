import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <header id="header" className="alt">
                <h1><Link to="/">Resume </Link></h1>
                <nav id="nav">
                    <ul>
                        <li className="special">
                            <Link to="/signup" className="menuToggle"><span>Signup</span></Link>
                        </li>
                        <li className="special">
                            <Link to="/login" className="menuToggle"><span>Login</span></Link>
                        </li>
                    </ul>
                </nav >
            </header >

        </div >
    );
}

export default Header;