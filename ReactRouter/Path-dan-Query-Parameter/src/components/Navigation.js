import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/now-playing">Now Playing</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link to="/search">Search Movie</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
