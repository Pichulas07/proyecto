import type { Movie } from "../../models/Movie.Model";

export default function MovieCard(props: Movie) {
    return(
        <a href={`/movies/${props.id}`} className="MovieCard">
            <div>
                <p>Titulo: {props.title}</p>
                <p>Descripcion: {props.description}</p>
            </div>
        </a>
    );
}