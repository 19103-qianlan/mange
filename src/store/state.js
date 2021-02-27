export default {
  user: window.localStorage.getItem('username') || '',
  token: window.localStorage.getItem('token') || ''
};
