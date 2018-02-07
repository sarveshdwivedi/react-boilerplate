import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserListTable from './userList';
import EditUser from './editUserModal';
import * as actions from '../../actions/testUser.action';


/*
 * Container component User list 
 */

class Users extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            name: '',
            username: '',
            email: '',
            currentUserId: ''
        }
        this.handleEditUser = this.handleEditUser.bind(this);
        this.getValues = this.getValues.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
    }

    componentWillMount() {
        this.props.userActions.getTestUsers();
    }

    handleEditUser(index) {
        let currentData = this.props.userList;
        let currentUserData = currentData[index];

        this.setState({
            name: currentUserData.name,
            username: currentUserData.username,
            email: currentUserData.email,
            currentUserId: currentUserData.id,
            open: true
        })
    }

    getValues(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    handleDeleteUser(id) {
        this.props.userActions.deleteTestUser(id);
    }

    updateUsers() {
        let data = {
            id: this.state.currentUserId,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        this.props.userActions.editTestUser(data);
        this.setState({ open: false })
    }

    cancelModal() {
        this.setState({ open: false })
    }


    render() {
        return (
            <div>
                <UserListTable userList={this.props.userList} handleEditUser={this.handleEditUser.bind(this)} handleDeleteUser={this.handleDeleteUser.bind(this)} />
                <EditUser openModal={this.state.open}
                    getValues={this.getValues.bind(this)}
                    name={this.state.name}
                    username={this.state.username}
                    email={this.state.email}
                    updateUsers={this.updateUsers.bind(this)}
                    cancelModal={this.cancelModal.bind(this)} />
            </div>
        )
    }
}

// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapStateToProps(state, ownProps) {

    return {
        userList: state.testUser.userList
    };
}
function mapDispatchToProps(dispatch) {

    return {
        userActions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);