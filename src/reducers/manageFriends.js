export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] };
    case 'REMOVE_FRIEND':
      let newFriends = [...state.friends];
      let friendIndex = newFriends.findIndex(f => f.id === action.id);
      newFriends.splice(friendIndex, 1);
      return {friends: newFriends};
    default:
      return state
  }
}
