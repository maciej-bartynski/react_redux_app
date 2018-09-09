export default function (state=null, action) {
    if (action.type==='MOVIES_DOWNLOAD'){
        return action.payload
    }
    return state;
}