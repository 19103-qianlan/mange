export default {
  getUser({ username }) {
    return window.localStorage.getItem(username);
  },
  setUser({ username, password }) {
    return window.localStorage.setItem(username, password);
  },
  getStyle(ele, attr) {
    const val = window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
    return parseFloat(val);
  }
};
