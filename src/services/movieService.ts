import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const movieService = {
    getAll: (): IRes<IMovie[]>=> apiService.get(urls.movies.base),
    getById:(id: number):IRes<IMovie> => apiService.get(urls.movies.byId(id))
   };


export {
    movieService
}