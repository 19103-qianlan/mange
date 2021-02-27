export default {
  login(state, data) {
    window.localStorage.setItem('username', data.username);
    if (data.token) {
      window.localStorage.setItem('token', data.token);
      state.token = data.token;
    }
    state.user = data.username;
  },
  logout(state) {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('token');
    state.token = '';
    state.user = '';
  }
};
