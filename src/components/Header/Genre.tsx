import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Header.module.css'
interface IProps extends PropsWithChildren {
    genre:IGenre
}
const Genre: FC<IProps>  = ({genre}) => {
    const {id,name} = genre;

    return (
          <NavLink key={id} to={'movies'} className={css.genreItem}>{name}</NavLink>
    );
};

export {Genre};