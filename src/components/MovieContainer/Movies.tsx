import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {

    const [movies, setMovies] = useState<IMovie[]>([])


    useEffect(() => {
        movieService.getAll().then(({data}) =>setMovies(data.results))

    }, [])
    return (
        <div className={css.MainMoviesPage}>
            {movies.map(movie => <Movie key = {movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};