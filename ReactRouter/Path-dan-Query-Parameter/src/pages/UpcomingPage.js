import React from 'react';
import MovieList from '../components/MovieList';
import { getUpcomingMovies } from '../utils/data';

class UpcomingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingMovies: getUpcomingMovies()
    };
  }

  render() {
    return (
      <section>
        <h2>Upcoming Movies</h2>
        <MovieList movies={this.state.upcomingMovies} />
      </section>
    );
  }
}

export default UpcomingPage;
