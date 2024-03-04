import {useContext} from "react";

import css from './Header.module.css'
import {Context} from "../../hok";
import {IGenre} from "../../interfaces";
import {Movie} from "../MovieContainer";
import {Genre} from "./Genre";
import {NavLink} from "react-router-dom";


const Header = () => {
   const  contextData = useContext(Context);

    const allGenresItem:IGenre[] = contextData && contextData.genres ? contextData.genres : [];

    return (
        <div className={css.HeaderContainer}>
            <NavLink to={'movies'} className={css.Home}>The MovieDB</NavLink>
            {/*<h1></h1>*/}
            <div className={css.HeaderCenterContainer}>
                <div className={css.genreContainer}>
                {allGenresItem.map(genre => <Genre key = {genre.id} genre = {genre}/>)}
                </div>
                <div className={css.SearchContainer}>

                </div>
            </div>
            <h2> <a href="https://t.me/oleksandr_vit" target={"_blank"}> by @Oleksandr_Vit</a></h2>
        </div>
    );
};

export {Header};