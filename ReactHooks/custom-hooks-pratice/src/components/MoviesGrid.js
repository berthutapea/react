// Logika Yang sudah diubah ke hooks

import React from 'react';
import useMovies from '../hooks/useMovies';

function MoviesGrid() {
  const [movies, loading] = useMovies();

  if (loading) {
    return (
      <div className="movies-grid">
        <p>Loading ....</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="movies-grid-item">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-grid-item--info">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesGrid;



//Logika yang belum di ubah untuk ke hooks

// import React from 'react';
// import { getMovies } from '../utils/api';

// function MoviesGrid() {
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
//       <div className="movies-grid">
//         <p>Loading ....</p>
//       </div>
//     );
//   }

//   return (
//     <div className="movies-grid">
//       {movies.map((movie) => {
//         return (
//           <div key={movie.id} className="movies-grid-item">
//             <img src={movie.poster} alt={movie.title} />
//             <div className="movie-grid-item--info">
//               <h1>{movie.title}</h1>
//               <p>{movie.overview}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default MoviesGrid;