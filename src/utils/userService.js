import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token));
}

function login(user) {
  return userAPI.login(user)
    .then(token => tokenService.setToken(token));
}

function update(user) {
  return userAPI.update(user)
  .then(token => tokenService.setToken(token));
}

function logout() {
  tokenService.removeToken();
}

function getUser() {
  return tokenService.getUserFromToken();
}

export default {
  signup,
  getUser,
  update,
  login,
  logout
}