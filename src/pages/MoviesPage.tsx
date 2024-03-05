import {Movies} from "../components";
import css from './MoviesPage.module.css'
const MoviesPage = () => {
    return (
        <div className={css.MainMoviesPageContainer}>
               <Movies/>
        </div>
    );
};

export {MoviesPage};