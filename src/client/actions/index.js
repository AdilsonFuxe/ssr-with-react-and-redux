import axios from 'axios';

export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async dispatch => {
  const result = await axios.get('https://react-ssr-api.herokuapp.com/users/xss');
  dispatch({
    type: FETCH_USERS,
    payload: result
  });
}