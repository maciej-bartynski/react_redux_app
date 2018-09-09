export function selectFilmAction (movie) {
    return {
        type: 'SELECT_MOVIE',
        payload: movie,
    }
}
