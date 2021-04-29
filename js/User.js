"use strict";


class User {
  constructor() {
  }
  initFields() {
  }
  get token() {
    return localStorage.getItem('token');
  }
  set token(t) {
    localStorage.setItem('token', t);
  }
  async login(email, password) {
  }
}

export default User;