import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const {id} = useParams<string>();
    console.log(id);
    useEffect(() => {
        if (id){
            movieService.getByGenreId(+id).then(({data}) => setMovies(data.results))
        }else{
            movieService.getAll().then(({data}) => setMovies(data.results))
        }


    }, [id])

    return (
        <div className={css.MainMoviesPage}>
            {movies.map(movie => <Movie key = {movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};