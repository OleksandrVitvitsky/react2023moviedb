import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre, IGenreRespData} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenreRespData>=> apiService.get(urls.genres.base)
};


export {
    genreService
}