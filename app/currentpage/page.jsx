import Movies from "../components/Movies";
import Pagination from "../components/Pagination";


export default async function ListOfMovies({params}) {

const {currentpage} = params

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular/?api_key=d37aa81d99fd5b49201922d61&page=${currentpage}`
  );
  const res = await data.json();



  return (
    <>
    <div className="flex justify-center py-10">
      <Pagination params={currentpage}/>
    </div>
      <div className="grid gap-16 grid-cols-fluid mx-5 my-3">
        {res.results.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  );
}
