import {Outlet} from "react-router-dom";

import {Movies} from "../components";

const MoviesPage = () => {
    return (
        <div>
            {/*<Outlet/>*/}
            <hr/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};