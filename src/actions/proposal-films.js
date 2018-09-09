export function downloadProposalFilmsAction(moviesArray) {
    return {
        type: 'PROPOSALS_DOWNLOAD',
        payload: moviesArray,
    }
}