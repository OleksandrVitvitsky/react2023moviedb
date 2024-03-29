import {FC, PropsWithChildren, useContext} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Context} from "../../hok";
import css from './Movies.module.css'




interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {
          id,
          backdrop_path,
          genre_ids,
          popularity,
          poster_path,
          title,
          release_date
    } = movie;

    const contextData = useContext(Context);

    let genreNamesString = '';
    let posterURL = '';
    if (contextData) {
       genreNamesString = contextData.getGenreNamesString(contextData.getGenresByIDs(contextData.genres,genre_ids));
       posterURL = contextData.getUrlPoster(poster_path);
    }



    const navigate = useNavigate();

    return (
       <div className={css.MovieContainer} onClick={() => navigate('/movies/'+id.toString(), { state: { movie } })}>
            <img src={posterURL} alt={title}/>
            <h2>{title}</h2>
            <div>
                <p>{release_date}</p>
                <p>{genreNamesString}</p>
            </div>
        </div>
    );
};

export {
    Movie
};