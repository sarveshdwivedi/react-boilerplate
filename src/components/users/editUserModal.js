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

class EditUser extends React.Component {

  render() {
    return (
      <Dialog
        title="Update User Details"
        actions={[
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.props.cancelModal}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            onClick={this.props.updateUsers}
          />,
        ]}
        modal={true}
        contentStyle={customContentStyle}
        open={this.props.openModal}
      >
        <div>
          <form >
            <div>
              <TextField
                floatingLabelText={"Name"}
                fullWidth={true}
                name="name"
                value={this.props.name}
                onChange={(e) => { this.props.getValues(e) }}
              />
            </div>
            <div>
              <TextField
                floatingLabelText={"Username"}
                fullWidth={true}
                name="username"
                value={this.props.username}
                onChange={(e) => { this.props.getValues(e) }}
              />
            </div>
            <div>
              <TextField
                floatingLabelText={"Email"}
                fullWidth={true}
                name="email"
                value={this.props.email}
                onChange={(e) => { this.props.getValues(e) }}
              />
            </div>
          </form >
        </div>
      </Dialog>
    );
  }
}
export default EditUser;
