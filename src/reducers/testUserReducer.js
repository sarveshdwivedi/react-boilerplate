const initialState = {
  userList: []
};
/*
 * user list state update.
 */
export default function testUser(state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
      return Object.assign({}, state, { userList: action.userList });
    case 'DELETE_USER':
      return { userList: state.userList.filter(userList => userList.id !== action.id) };
    case 'UPDATE_USERS':
      return {
        userList: state.userList.map(userList => userList.id === action.data.id ?
          Object.assign({}, userList, { name: action.data.name, username: action.data.username, email: action.data.email }) : userList)
      };
    default:
      return initialState;
  }
}

