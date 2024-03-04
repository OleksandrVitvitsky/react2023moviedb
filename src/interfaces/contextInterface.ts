import {IGenre} from "./genreInterface";

export interface IContextData {
    getGenresByIDs: (allGenres:IGenre[],itemsIDs: number[]) => IGenre[];
    getGenreNamesString: (itemsIDs: IGenre[]) => string;
    getUrlPoster: (pathPoster:string) => string;
    genres:IGenre[];
}