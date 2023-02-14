import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: props.defaultKeyword || ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.search(this.state.keyword);
    }

    onKeywordChangeHandler(event) {
        const { value } = event.target;

        this.setState(() => {
            return {
                keyword: value
            };
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    placeholder="search movie by title"
                    value={this.state.keyword}
                    onChange={this.onKeywordChangeHandler}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
    defaultKeyword: PropTypes.string
};

export default SearchBar;
