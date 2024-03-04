
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layots";
import {MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages";

const router = createBrowserRouter ([
    {
        path:'', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>, children: [
                     // {
                     //     path: ':id', element:  <MovieDetailsPage/>
                     // }

                ]
            },
            {
                // path: 'movieDetail', element: <MovieDetailsPage/>
                path: ':id/movies/:id', element:  <MovieDetailsPage/>
            },
            {
               // path: 'movieDetail', element: <MovieDetailsPage/>
                path: 'movies/:id', element:  <MovieDetailsPage/>
            },
            {
                // path: 'movieDetail', element: <MovieDetailsPage/>
                path: ':id', element:  <MoviesPage/>
            }

        ]
    }

])

export {
    router
 }