import React from 'react';
import { createRoot } from 'react-dom/client';
import MoviesGrid from './components/MoviesGrid';
import MoviesList from './components/MoviesList';

import './styles/style.css';

/**
 * @notes
 * Aplikasi sudah berjalan dengan baik, tetapi masih terdapat
 * duplikasi logika dalam menampilkan data film
 * di komponen MoviesList dan MoviesGrid
 *
 * @todos
 * Hapus duplikasi logika pada komponen MoviesList dan MoviesGrid
 * dengan membuat custom hooks.
 */

function App() {
    const [mode, setMode] = React.useState('list');

    const modeChangeHandler = (event) => {
        setMode(event.target.value);
    };

    return (
        <main>
            <select onChange={modeChangeHandler}>
                <option value="list">List Mode</option>
                <option value="grid">Grid Mode</option>
            </select>

            {mode === 'list' ? <MoviesList /> : <MoviesGrid />}
        </main>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
