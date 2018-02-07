import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const iconStylesDelete = {
  color: 'red',
  fontSize: 25,
  cursor:'pointer'
};
const iconStylesEdit = {
  color: 'blue',
  fontSize: 25,
  marginRight: '5px',
  cursor:'pointer'
};

/*
 * User List Populate here 
 */

const UserListTable = ({ userList, handleEditUser, handleDeleteUser }) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Id</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Username</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {userList.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.name}</TableRowColumn>
          <TableRowColumn>{row.username}</TableRowColumn>
          <TableRowColumn>{row.email}</TableRowColumn>
          <TableRowColumn>
            <FontIcon className="material-icons" style={iconStylesEdit} onClick={() => { handleEditUser(index) }}>edit</FontIcon>
            <FontIcon className="material-icons" style={iconStylesDelete} onClick={() => { handleDeleteUser(row.id) }}>delete</FontIcon>
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UserListTable;