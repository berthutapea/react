// Logika Yang sudah diubah ke hooks

import React from 'react';
import useMovies from '../hooks/useMovies';

function MoviesList() {
    const [movies, loading] = useMovies();

    if (loading) {
        return (
            <div className="movies-list">
                <p>Loading ....</p>
            </div>
        );
    }

    return (
        <ul className="movies-list">
            {movies.map((movie) => {
                return (
                    <li key={movie.id} className="movies-list-item">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default MoviesList;


//Logika yang belum di ubah untuk ke hooks

// import React from 'react';
// import { getMovies } from '../utils/api';

// function MoviesList() {
//   const [loading, setLoading] = React.useState(true);
//   const [movies, setMovies] = React.useState([]);

//   React.useEffect(() => {
//     getMovies().then((movies) => {
//       setMovies(movies);
//       setLoading(false);
//     });

//     return () => {
//       setLoading(true);
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="movies-list">
//         <p>Loading ....</p>
//       </div>
//     );
//   }

//   return (
//     <ul className="movies-list">
//       {movies.map((movie) => {
//         return (
//           <li key={movie.id} className="movies-list-item">
//             <h1>{movie.title}</h1>
//             <p>{movie.overview}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default MoviesList;
