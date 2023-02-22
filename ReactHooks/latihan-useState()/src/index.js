import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './components/Todo';
import ToggleLamp from './components/ToggleLamp';

import './styles/style.css';

function App() {
    return (
        <>
            <h1>
                Latihan <code>useState()</code>
            </h1>
            <section>
                <h2>
                    Kasus 1: <code>ToggleLamp</code> Component
                </h2>
                <p>Nyalakan lampu untuk melihat pesan.</p>
                <ToggleLamp />
            </section>
            <section>
                <h2>
                    Kasus 2: <code>Todo</code> Component
                </h2>
                <Todo />
            </section>
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
