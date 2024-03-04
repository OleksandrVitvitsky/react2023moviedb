import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const movieService = {
    getAll: (): IRes<any>=> apiService.get(urls.movies.base),
    getById:(id: number):IRes<any> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (id:number):IRes<any> =>apiService.get(urls.movies.byGenreId(id))
   };


export {
    movieService
}