import React from 'react';
import { createRoot } from 'react-dom/client';
import { subscribeGitHubProfile } from './api';

function GitHubProfile({ username }) {
    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = subscribeGitHubProfile(username, (profile) => {
            setProfile(profile);
        });

        return () => {
            unsubscribe();
            setProfile(null);
        };
    }, [username]);

    if (profile === null) {
        return <p>loading ...</p>;
    }

    const { login, avatar_url } = profile;

    return (
        <>
            <img src={avatar_url} alt={login} />
            <h1>{login}</h1>
        </>
    );
}

function App() {
    const [username, setUsername] = React.useState('dicodingacademy');

    const usernameChange = ({ target }) => setUsername(target.value);

    return (
        <>
            <div>
                <input
                    type="radio"
                    name="username"
                    value="dicodingacademy"
                    checked={username === 'dicodingacademy'}
                    onChange={usernameChange}
                />{' '}
                dicodingacademy
                <input
                    type="radio"
                    name="username"
                    value="reactjs"
                    checked={username === 'reactjs'}
                    onChange={usernameChange}
                />{' '}
                reactjs
            </div>

            <GitHubProfile username={username} />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
