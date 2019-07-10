import api from './api';

const getUsers = () => ({
  type: 'GET_USERS',
  payload: api.get('/customers.json'),
});

export default getUsers;
