import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layots";

const router = createBrowserRouter ([
    {
        path:'', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>, children: [
                    {
                        path: ':id', element: <MovieDetailsPage/>
                    }
                ]
            }

        ]
    }

])

export {
    router
}