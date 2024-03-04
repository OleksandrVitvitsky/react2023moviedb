import {IGenre} from "./genreInterface";

export interface IContextData {
    getGenresByIDs: (allGenres:IGenre[],itemsIDs: number[]) => IGenre[];
    getGenreNamesString: (itemsIDs: IGenre[]) => string;
    genres:IGenre[];
}