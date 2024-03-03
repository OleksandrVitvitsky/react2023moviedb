const baseURL = 'https://api.themoviedb.org/3';

const baseURL_Poster = 'https://image.tmdb.org/t/p/w500';

const discover = '/discover'
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        base: `${discover}${movie}`,
        byId: (id:number):string => `${movie}/${id}`
    },
    genres:{
        base: genres
    },
    poster: {
        base: (poster_path:string):string => `${poster_path}`
    }

}

export {
    baseURL,
    baseURL_Poster,
    urls
}