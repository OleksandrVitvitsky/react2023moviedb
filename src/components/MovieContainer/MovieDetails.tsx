import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {IContextData, IMovie} from "../../interfaces";
import {useAppLocation} from "../../hooks";
import {movieService} from "../../services";
import css from './Movies.module.css'
import {Context} from "../../hok";


const MovieDetails = () => {
    const {state} = useAppLocation<{ movie:IMovie }>();
    const [movieDetails, setMovieDetails] = useState<IMovie>()
    const {id} = useParams<string>();

    useEffect(() => {
        if (state?.movie) {
            setMovieDetails(state.movie)
        } else if (id){
            movieService.getById(+id).then(({data}) => setMovieDetails(data))
        }
    }, [id, state])


    const contextData = useContext(Context);
    let posterURL = '';
    let genreNamesString = '';
    if (contextData) {
        posterURL = movieDetails && movieDetails.poster_path ? contextData.getUrlPoster(movieDetails.poster_path) : '';
        genreNamesString = contextData.getGenreNamesString(contextData.getGenresByIDs(contextData.genres,movieDetails ? movieDetails.genre_ids:[]));
    }
    const getYear:string = movieDetails && movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear().toString() : '';
    const getOverview:string =  movieDetails && movieDetails.overview ? movieDetails.overview : '';
    return (
        <div className={css.MovieDetails__Container}>
             <div className={css.MovieDetails__Poster}>
                     <div className={css.MovieDetails_Img}>
                          <img src={posterURL} alt={movieDetails?.title}/>
                     </div>
                     <div className={css.MovieDetails__Titles}>
                        <h1>{movieDetails?.title}</h1>
                        <h2>{getYear}</h2>
                        <div> <p>{genreNamesString}</p></div>
                     </div>
             </div>
            <div className={css.MovieDetails__starsContainer}>
                stars
            </div>
            <div className={css.MovieDetails__Overview}>
                <p>
                    {getOverview}
                </p>
            </div>
        </div>
    );
};

export {MovieDetails};