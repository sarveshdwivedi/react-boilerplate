import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('getTestUsers()', () => {
    it('should store the response from a successful GET request.', function () {
        const mock = new MockAdapter(axios);
        mock.onGet('https://jsonplaceholder.typicode.com/users').reply(function(response) {
            return store.dispatch({ type: 'GET_USERS', userList: response.data })
            .then(() => {
                const {
                    userList
                } = store.getState().testUser
                expect(userList).toEqual(10)
            })
          });
    })
})