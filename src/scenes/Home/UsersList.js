import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const UsersList = (props) => {
  const { users, handleUploadFile } = props;

  return (
    <>
      <h1 style={{textAlign: "center"}}>Customer List</h1>
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td><img height="50" width="50" src={"https://bootdey.com/img/Content/avatar/avatar6.png"}></img></td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

UsersList.defaultProps = {
  users: [],
};
UsersList.propTypes = {
  users: [PropTypes.object.isRequired],
  handleUploadFile: PropTypes.func.isRequired,
};

export default UsersList;
