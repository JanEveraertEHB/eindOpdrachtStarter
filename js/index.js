"use strict";

import List from "./List.js";
import User from "./User.js";


const service = {
  userID: null,
  list: [],
  user: new User(),
  init() {
    this.user.initFields();

    if(this.user.token !== null) {
      this.list = new List(this.user.token);
    } 
  }

};

service.init();