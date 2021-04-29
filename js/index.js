"use strict";

import User from "./User.js";


const service = {
  user: new User(),
  init() {
    this.user.initFields();

    if(this.user.token !== null) {
      // fetch it!
    } 
  }

};

service.init();