import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import Community from '../pages/Community';

/**
 * @notes
 * Manfaatkan tombol pada komponen ini untuk mengubah nilai context
 */

function Navigation() {
    const { locale, toggleLocale } = React.useContext(LocaleContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">{locale === 'id' ? 'Beranda' : 'Home'}</Link>
                </li>
                <li>
                    <Link to="/tutorial">Tutorial</Link>
                </li>
                <li>
                    <Link to="/community">{locale === 'id' ? 'Komunitas' : 'Community'}</Link>
                </li>
            </ul>
            <button onClick={toggleLocale}>{locale === 'id' ? 'English' : 'Indonesia'}</button>
        </nav>
    );
}

export default Navigation;
