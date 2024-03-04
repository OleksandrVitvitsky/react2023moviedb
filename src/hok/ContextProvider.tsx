import { createContext, FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";

import {IContextData, IGenre} from "../interfaces";
import { genreService } from "../services";
import {baseURL_Poster, urls} from "../constants";



const Context = createContext <IContextData | undefined> (undefined);

interface IProps extends PropsWithChildren {
    children: ReactNode;
}

const ContextProvider: FC<IProps> = ({ children }) => {
    const [genres, setGenres] = useState<IGenre[]>([]);



    useEffect(() => {
        genreService.getAll().then(({ data }) => setGenres(data.genres));
    }, []);

    function getGenresByIDs (allGenres:IGenre[],itemsIDs: number[]): IGenre[]  {
         return allGenres.filter(genre => itemsIDs.includes(genre.id));
    };
    function getUrlPoster (pathPoster:string):string{
        return baseURL_Poster + urls.poster.base(pathPoster)
    }

    function getGenreNamesString  (itemsIDs: IGenre[]): string  {
        return itemsIDs.map(genre => genre.name).join('     ');
    };

    const contextData: IContextData = {
        getGenresByIDs,
        getGenreNamesString,
        getUrlPoster,
        genres
    };

    return (
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };







































// import {createContext, FC, PropsWithChildren, ReactNode, useEffect, useState} from "react";
// import {IGenre} from "../interfaces";
// import {genreService} from "../services";
//
// const Context = createContext<IGenre[]>([])
//
// interface IProps extends PropsWithChildren {
//     children: ReactNode;
// }
//
// const ContextProvider: FC<IProps> = ({children}) => {
//
//     const [genres, setGenres] = useState<IGenre[]>([])
//
//
//     useEffect(() => {
//         genreService.getAll().then(({data}) =>setGenres(data))
//
//     }, [])
//
//     const getGenresByIDs = (itemsIDs:IGenre[] ):IGenre[] => {
//         return genres.filter(genre => itemsIDs.includes(genre.id));
//     }
//     const getGenreNamesString = (itemsIDs:IGenre[] ):string => {
//         return itemsIDs.map(genre => genre.name).join('/ ');
//     }
//
//     return (
//         <Context.Provider value={{getGenresByIDs}}>
//               {children}
//         </Context.Provider>
//     );
// };
//
// export {
//     ContextProvider,
//     Context
// };