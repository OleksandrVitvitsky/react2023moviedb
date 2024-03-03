import {FC, PropsWithChildren} from "react";


import {IMovie} from "../../interfaces";
import {baseURL_Poster, urls} from "../../constants";




interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {
          id,
          backdrop_path,
          genres,

          popularity,
          poster_path,
          title,
          release_date
    } = movie;


const posterURL = baseURL_Poster + urls.poster.base(poster_path);

    return (
        <div>

            <img src = {posterURL}  alt={title}/>

            <h2>
                title: {title}
            </h2>
            <div>
                <p>{release_date}</p>

            </div>

            {/*<button onClick={() => navigate(id.toString(), {state: {user}})}>Details</button>*/}
        </div>
    );
};

export {
    Movie
};