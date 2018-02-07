import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

/*
 * Edit User modal dialogue
 */
const EditUser = ({ username, name, email,openModal,cancelModal,updateUsers,getValues }) =>(
      <Dialog
        title="Update User Details"
        actions={[
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={cancelModal}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            onClick={updateUsers}
          />,
        ]}
        modal={true}
        contentStyle={customContentStyle}
        open={openModal}
      >
        <div>
          <form >
            <div>
              <TextField
                floatingLabelText={"Name"}
                fullWidth={true}
                name="name"
                value={name}
                onChange={(e) => { getValues(e) }}
              />
            </div>
            <div>
              <TextField
                floatingLabelText={"Username"}
                fullWidth={true}
                name="username"
                value={username}
                onChange={(e) => { getValues(e) }}
              />
            </div>
            <div>
              <TextField
                floatingLabelText={"Email"}
                fullWidth={true}
                name="email"
                value={email}
                onChange={(e) => { getValues(e) }}
              />
            </div>
          </form >
        </div>
      </Dialog>
    );
export default EditUser;
