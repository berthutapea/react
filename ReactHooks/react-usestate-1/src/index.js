import React from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
    const [count, setCount] = React.useState(0);

    // menggantikan componentDidMount dan componentDidUpdate
    React.useEffect(() => {
        console.count('di dalam useEffect');
        document.title = `You have clicked ${count}x`;
    });

    const increase = () => setCount((prevCount) => prevCount + 1);
    const decrease = () => setCount((prevCount) => prevCount - 1);

    console.count('rendering');

    return (
        <>
            <button onClick={increase}>increase</button>
            <p>Count: {count}</p>
            <button onClick={decrease}>decrease</button>
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);
