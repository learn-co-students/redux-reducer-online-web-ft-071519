export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            let newFriend = {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id};
            state.friends.push(newFriend);
            return state;
        case 'REMOVE_FRIEND':
            //let olderDog = Object.assign({}, dog, {age: dog.age + 1})
            let withRemovedFriend = [];
            state.friends.forEach(friend => {
                if (friend.id != action.id) {
                    withRemovedFriend.push(friend);
                }
            })
            return Object.assign({}, {friends: withRemovedFriend});
        default:
            return state;
    }
  }	
