export default function (state = null, action) {
    if (action.type === 'PROPOSAL_TERM') {
        return action.payload
    }
    return state;
}