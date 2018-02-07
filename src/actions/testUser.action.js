import axios from 'axios';

/*
 * action creators for get user list and edit user
 */

export function getTestUsers() {

  return function (dispatch, getState) {

    axios.get('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {

        return dispatch({ type: 'GET_USERS', userList: response.data });
      });

  }
}

export function editTestUser(data) {
  
  return function (dispatch, getState) {

    return dispatch({ type: 'UPDATE_USERS', data: data });

  }
}

export function deleteTestUser(id) {

  return function (dispatch, getState) {

    return dispatch({ type: 'DELETE_USER', id: id });

  }
}