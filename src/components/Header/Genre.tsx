import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Header.module.css'

interface IProps extends PropsWithChildren {
    genre:IGenre
}
const Genre: FC<IProps>  = ({genre}) => {
    const {id,name} = genre;

    const navigate = useNavigate();

    return (
        <div className={css.genreItem} onClick={() => navigate(id.toString())}>
            <p>{name}</p>
          {/*<NavLink key={id} to={'movies'} className={css.genreItem}>{name}</NavLink>*/}
            </div>
    );

};

export {Genre};