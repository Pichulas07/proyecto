
import type { Movie } from "../../models/Movie.Model";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const movies: Movie[] =[

         {
            id: "Wall-E",
            title: "Wall-E",
            description: "Robot de basura",
        },

         {
            id: "Cars",
            title: "Cars",
            description: "Parte 1",
        }

    ];
    return(
        <div className="flex flex-col gap-4 bg-blue-200">
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie}/>
            ))}
        </div>
    );
}