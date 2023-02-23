import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// Custom Hooks
function useInput(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);

    return [value, handleValueChange];
}

function RegisterForm() {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    return (
        <form>
            <input value={email} type="email" onChange={handleEmailChange} />
            <input value={password} type="password" onChange={handlePasswordChange} />
            <input value={confirmPassword} type="password" onChange={handleConfirmPasswordChange} />
        </form>
    );
}

function LoginForm() {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    return (
        <form>
            <input value={email} onChange={handleEmailChange} />
            <input value={password} type="password" onChange={handlePasswordChange} />
        </form>
    );
}

function App() {
    return (
        <>
            <h1>Custom Hooks Sample</h1>
            <h2>Register Form</h2>
            <RegisterForm />
            <h2>Login Form</h2>
            <LoginForm />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
