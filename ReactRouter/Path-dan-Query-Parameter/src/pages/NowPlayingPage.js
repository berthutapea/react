import React from 'react';
import MovieList from '../components/MovieList';
import { getNowPlayingMovies } from '../utils/data';

class NowPlayingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlayingMovies: getNowPlayingMovies()
    };
  }

  render() {
    return (
      <section>
        <h2>Now Playing</h2>
        <MovieList movies={this.state.nowPlayingMovies} />
      </section>
    );
  }
}

export default NowPlayingPage;
