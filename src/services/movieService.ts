import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const movieService = {
    getAll: (): IRes<IMovie[]>=> apiService.get(urls.movies.base),
   };


export {
    movieService
}