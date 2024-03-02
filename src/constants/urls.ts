const baseURL = 'https://api.themoviedb.org/3';

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
    }

}

export {
    baseURL,
    urls
}