import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {IMovie, ISearch} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {

}


const Movies: FC<IProps> = () => {
    const {reset,register, handleSubmit} = useForm<ISearch>();
    const [movies, setMovies] = useState<IMovie[]>([])
    const [, setError] = useState<boolean>();
    const {id} = useParams();

    const [query, setQuery] = useSearchParams({page: '1'});

    const [, setPrevNext] = useState({prev: null, next: null})


    useEffect(() => {
        if (id){
            movieService.getByGenreId(+id).then(({data}) => setMovies(data.results))
        }else{

            movieService.getAll(query.get('page')|| undefined).then(({data}) => {

                setMovies(data.results)

                setPrevNext({prev: data.prev, next: data.next})

            })
        }}, [id, query.get('page')])

    const onSubmit: SubmitHandler<ISearch> = async (objSearch)=> {
        if (objSearch.querySearch === "") {
            reset()
            return
        }

        try {
            await movieService.search(objSearch.querySearch).then(({data}) => setMovies(data.results))
        } catch (e) {
            setError(true)
        }
        reset();

        // }

    }
    const prev = () => {
        setQuery(prev => {

            const currentPage = prev.get('page');
            console.log(currentPage);
            if (currentPage !== null && currentPage !== undefined && currentPage !== "1") {
                prev.set('page', (parseInt(currentPage, 10) - 1).toString());
            }

            return prev;
        })
    }

    const next = () => {
        setQuery(prev => {

            const currentPage = prev.get('page');

            if (currentPage !== null && currentPage !== undefined) {
                prev.set('page', (parseInt(currentPage, 10) + 1).toString());
            }

            return prev;
        })
    }

    return (
        <div className={css.MainMovies_Container}>
            <form className={css.searchForm} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'enter your text'}  {...register('querySearch')}/>
                <button type="submit">Search</button>
            </form>
            <div className={css.MainMovies__Buttons}>
                {/*<button disabled={!prevNext.prev} onClick={prev}>prev</button>*/}
                {/*<button disabled={!prevNext.next} onClick={next}>next</button>*/}

                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>

            <div className={css.MainMoviesPage}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>


        </div>
    )
        ;
};

export {
    Movies
}