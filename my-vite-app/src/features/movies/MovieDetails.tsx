import { useParams } from "react-router-dom";

export function MovieDetails() {
   const {id} = useParams<{ id: string; }>();
    return(
        <div>
            <h1>Movie details</h1>
            <p>Movie ID: {id}</p>
        </div>
    );
}