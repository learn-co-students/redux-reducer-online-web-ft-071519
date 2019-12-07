export function manageFriends(state = {friends: []}, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return { ...state, friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            const removeID = state.friends.findIndex(f => f.id === action.id)
            return (
                {
                    ...state, friends: [...state.friends.slice(0, removeID), ...state.friends.slice(removeID + 1)]
                }
            )
        default:
            return state;
    }
}
