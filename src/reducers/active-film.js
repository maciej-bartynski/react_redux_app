export default function (state=null, action) {
    if (action.type==='SELECT_MOVIE'){
        return action.payload
    }
    return state;
}