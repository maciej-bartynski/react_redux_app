export default function (state = null, action) {
    if (action.type === 'SEARCH_TERM') {
        return action.payload
    }
    return state;
}