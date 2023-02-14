import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../utils/data';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foundedMovies: []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(keyword) {
        this.setState(() => {
            return {
                foundedMovies: searchMovies(keyword)
            };
        });
    }

    render() {
        return (
            <section>
                <h2>Search Movie</h2>
                <SearchBar search={this.onSearch} />
                <MovieList movies={this.state.foundedMovies} />
            </section>
        );
    }
}

export default SearchPage;
