import React from 'react';
import { getMovies } from '../utils/api';

function useMovies() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        };
    }, []);

    return [movies, loading];
}

export default useMovies;
