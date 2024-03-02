import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";



interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id,title} = movie;

    // const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            {/*<button onClick={() => navigate(id.toString(), {state: {user}})}>Details</button>*/}
        </div>
    );
};

export {
    Movie
};