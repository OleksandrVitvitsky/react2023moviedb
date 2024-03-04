import {useContext, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {IRes} from "../../types";
import css from './Header.module.css'
import {Context} from "../../hok";
import {IGenre, ISearch} from "../../interfaces";
import {Movie} from "../MovieContainer";
import {Genre} from "./Genre";
import {NavLink, useNavigate} from "react-router-dom";
import {movieService} from "../../services";
// interface FormValues {
//     querySearch: string;
// }

const Header = () => {
   const  contextData = useContext(Context);

    const allGenresItem:IGenre[] = contextData && contextData.genres ? contextData.genres : [];

    return (
        <div className={css.HeaderContainer}>
            <NavLink to={'movies'} className={css.Home}>The MovieDB</NavLink>

            <div className={css.HeaderCenterContainer}>
                <div className={css.genreContainer}>
                          {allGenresItem.map(genre => <Genre key = {genre.id} genre = {genre}/>)}
                </div>

            </div>
            <h2><a href="https://t.me/oleksandr_vit" target={"_blank"}> by @Oleksandr_Vit</a></h2>
        </div>
    );
};

export {Header};