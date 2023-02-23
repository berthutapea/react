import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { community } from '../utils/content';

function Community() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <>
            <h1>{community[locale].header}</h1>
            <span className="subheader">{community[locale].subheader}</span>
            <p>{community[locale].paragraph}</p>
        </>
    );
}

export default Community;
