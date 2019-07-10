import React from 'react';
import PropTypes from 'prop-types';
import UsersList from './UsersList';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    const { users } = this.props;
    this.state = {
      users,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.users !== nextProps.users) {
      return { users: nextProps.users };
    }
    return null;
  }

  componentDidMount() {
    const { getUsersFunction } = this.props;
    getUsersFunction();
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    this.props.uploadUsersFunction(data)
  }

  render() {
    const { users } = this.state;
    const { usersLoading } = this.props;

    if (usersLoading) {
      return (<>Loading...</>);
    }

    return (<UsersList users={users} handleUploadFile={this.handleUploadFile}/>);
  }
}

Home.defaultProps = {
  users: [{}],
};
Home.propTypes = {
  users: PropTypes.array,
  getUsersFunction: PropTypes.func.isRequired,
  usersLoading: PropTypes.bool.isRequired,
};

export default Home;
