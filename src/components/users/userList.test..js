import React from 'react';
import UserListTable from './userList';
import {shallow} from 'enzyme';

const props = {
  userList: [],
};
it('renders', () => {
  const wrapper=shallow(<UserListTable {...props}/>);
  const instance = wrapper.instance();
  expect(instance).not.toBe(null);
});