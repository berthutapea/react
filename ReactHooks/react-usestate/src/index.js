import React from 'react';
import { createRoot } from 'react-dom/client';

function Greeting() {
    const [locale, setLocale] = React.useState('id');

    const changeToId = () => setLocale('id');
    const changeToEn = () => setLocale('en');

    return (
        <div>
            {locale === 'id' ? (
                <>
                    <p>Selamat pagi!</p>
                    <button onClick={changeToEn}>Translate</button>
                </>
            ) : (
                <>
                    <p>Good morning!</p>
                    <button onClick={changeToId}>Terjemahkan</button>
                </>
            )}
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
