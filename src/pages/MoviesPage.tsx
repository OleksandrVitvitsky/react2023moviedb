import {Outlet} from "react-router-dom";

import {Movies} from "../components";
import css from './MoviesPage.module.css'
const MoviesPage = () => {
    return (
        <div className={css.MainMoviesPageContainer}>
            {<Outlet/>}
            <Movies/>
        </div>
    );
};

export {MoviesPage};