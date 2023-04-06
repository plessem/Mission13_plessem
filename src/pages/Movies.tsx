import { useState } from 'react';
import { Movie } from '../types/movie';
// getting the type of movie

function Movies() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  // getting the data to load in
  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovie();

  return (
    <>
      <div className="row">
        <h4>Joel Hilton's Movie List</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        {/* inserting data into the table */}
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Movies;

// import data from '.././MovieData.json';
// import styles from '.././Home.module.css';

// const md = data.MovieData;

// function Movies() {
//   return (
//     <>
//       <div className={styles.tablehead}>
//         <br></br>
//         <br></br>
//         <h3>Joel Hilton's Movie Collection</h3>
//       </div>

//       {/* Table for the movies */}
//       <div>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th className={styles.th}>Title</th>
//               <th className={styles.th}>Year</th>
//               <th className={styles.th}>Director</th>
//               <th className={styles.th}>Rating</th>
//               <th className={styles.th}>Category</th>
//               <th className={styles.th}>Edited</th>
//             </tr>
//           </thead>
//           {/* inserting the data for each entry */}
//           <tbody>
//             {md.map((m) => (
//               <tr>
//                 <td>{m.Title}</td>
//                 <td>{m.Year}</td>
//                 <td>{m.Director}</td>
//                 <td>{m.Rating}</td>
//                 <td>{m.Category}</td>
//                 <td>{m.Edited}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Movies;
