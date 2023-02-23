async function getMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=0de37458c6ffde6aa6a16af814be4efa`
    );

    const { results } = await response.json();

    return results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));
}

export { getMovies };
