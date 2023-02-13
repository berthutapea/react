import React from 'react';
import { createRoot } from 'react-dom/client';

function HomePage() {
    return <p>This is Homepage</p>;
}

function AboutPage() {
    return <p>This is About page</p>;
}

function FAQPage() {
    return <p>This is FAQ page</p>;
}

function Link({ target, navigate, children }) {
    return (
        <a
            href={target}
            onClick={(event) => {
                event.preventDefault(); // menghapus behavior default
                navigate(target); // mengubah state berdasarkan target
            }}
        >
            {children}
        </a>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            page: '/'
        };

        this.navigate = this.navigate.bind(this);
    }

    navigate(target) {
        this.setState(() => {
            return {
                page: target
            };
        });
    }

    render() {
        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link target="/" navigate={this.navigate}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link target="/about" navigate={this.navigate}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link target="/faq" navigate={this.navigate}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {this.state.page === '/' && <HomePage />}
                    {this.state.page === '/about' && <AboutPage />}
                    {this.state.page === '/faq' && <FAQPage />}
                </main>
            </>
        );
    }
}

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
