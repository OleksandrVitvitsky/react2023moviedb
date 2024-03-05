import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";

const movieService = {
    getAll: (page:string = '1'):IRes<any>=> apiService.get(urls.movies.base,{params: {page}}),
    getById:(id: number):IRes<any> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (id:number):IRes<any> =>apiService.get(urls.movies.byGenreId(id)),

    search: (searchText:string):IRes<any>  => apiService.get(urls.movies.byName(searchText))
   };


export {
    movieService
}