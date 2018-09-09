export default function (state = null, action) {
    if (action.type === 'PROPOSALS_DOWNLOAD') {
        return action.payload
    }
    return state;
}