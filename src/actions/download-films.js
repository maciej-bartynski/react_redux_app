export function downloadFilmsAction(moviesArray) {
    return {
        type: 'MOVIES_DOWNLOAD',
        payload: moviesArray,
    }
}