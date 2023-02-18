import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import RepositoriesList from './components/RepositoriesList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'all'
        };

        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    onLanguageChange(language) {
        this.setState(() => {
            return {
                language
            };
        });
    }

    render() {
        return (
            <>
                <LanguageSwitcher language={this.state.language} languageChange={this.onLanguageChange} />
                <RepositoriesList language={this.state.language} />
            </>
        );
    }
}

export default App;
