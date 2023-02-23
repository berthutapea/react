import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Community from './pages/Community';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import LocaleContext from './contexts/LocaleContext';

import './styles/style.css';

/**
 * @todos
 * 1. Buatlah fitur ubah bahasa dengan memanfaatkan Context.
 * 2. Pastikan Anda menggunakan fitur Hooks dalam memanfaatkan Context.
 *
 * Catatan:
 *  - Manfaatkan tombol yang berada di pojok kanan navigasi untuk mengubah bahasa.
 *  - Seluruh konten yang ditampilkan diambil dari utils -> content.js
 */

function App() {
    const [locale, setLocale] = React.useState('id');

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            return prevLocale === 'id' ? 'en' : 'id';
        });
    };

    const localeContextValue = React.useMemo(() => {
        return {
            locale,
            toggleLocale
        };
    }, [locale]);

    return (
        <>
            <LocaleContext.Provider value={localeContextValue}>
                <header>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tutorial" element={<Tutorial />} />
                        <Route path="/community" element={<Community />} />
                    </Routes>
                </main>
            </LocaleContext.Provider>
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
