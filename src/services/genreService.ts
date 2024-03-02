import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre} from "../interfaces";



const genreService = {
    getAll: (): IRes<IGenre[]>=> apiService.get(urls.genres.base)
};


export {
    genreService
}