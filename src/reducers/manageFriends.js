export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
                return (
                  {...state,
                      friends: [
                        ...state.friends,
                        action.friend
                      ]
                  }
              )
        
        case "REMOVE_FRIEND":
            const friendId = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(friendId),
                        ...state.friends.slice(friendId + 1)
                    ]}
            )
        default: 
            return state
    }
}
