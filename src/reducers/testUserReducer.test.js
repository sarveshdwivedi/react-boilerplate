import deepFreeze from 'deep-freeze';
import testUser from './testUserReducer';

describe('Test Users reducer tests', () => {
    const state = {
        userList: [{
                id: 1,
                name: 'John',
                username: 'johney',
                email: 'john@yopmail.com'
            },
            {
                id: 2,
                name: 'Marsh',
                username: 'marshy',
                email: 'marsh@yopmail.com'
            },
            {
                id: 3,
                name: 'Ricky',
                username: 'rick',
                email: 'rick@yopmail.com'
            },
        ]
    }

    describe('GET_USERS TESTS', () => {
        const action = {
            type: 'GET_USERS',
            userList: state.userList
        };
        it('Should return all users', () => {
            expect(state.userList.length).toEqual(3);
        });
    });

    describe('DELETE_USER TESTS', () => {
        const action = {
            type: 'DELETE_USER',
            id: 1
        };
        it('Should return a new state object when deleting a user', () => {
            expect(state.userList.length).toEqual(3);
        });

        it('Should return a state object without the deleted user', () => {        
            const newState = testUser(state, action);
            testUser(state, action);
            expect(newState.userList.indexOf({
                id: 1,
                name: 'John',
                username: 'johney',
                email: 'john@yopmail.com'
            })).toEqual(-1);
        });
    });
});