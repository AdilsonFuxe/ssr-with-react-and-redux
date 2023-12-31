import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from '../actions';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h3>Big List of users</h3>
        <ul>
          {
            this.props.users.map(user => <li key={user.id}>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, {fetchUsers})(UsersListPage),
  loadData
}