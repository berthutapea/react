import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../utils/data';
import { useSearchParams } from 'react-router-dom';

function SearchPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const title = searchParams.get('title');

    function changeSearchParams(keyword) {
        setSearchParams({ title: keyword });
    }

    return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foundedMovies: props.activeKeyword ? searchMovies(props.activeKeyword) : []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(keyword) {
        this.setState(() => {
            return {
                foundedMovies: searchMovies(keyword)
            };
        });

        this.props.onSearch(keyword);
    }

    render() {
        return (
            <section>
                <h2>Search Movie</h2>
                <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
                <MovieList movies={this.state.foundedMovies} />
            </section>
        );
    }
}

export default SearchPageWrapper;
