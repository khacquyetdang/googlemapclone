import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

if (Meteor.isServer) {
  Meteor
    .publish('userData', function () {
      if (this.userId) {
        return Meteor
          .users
          .find({
            _id: this.userId
          }, {
            fields: {
              other: 1,
              things: 1
            }
          });
      } else {
        this.ready();
      }
    });
}

export const User = {
  get: function () {
    return Meteor.user() || {};
  },

  id: function () {
    return Meteor.userId();
  },

  isLoggedIn: function () {
    return !!Meteor.userId();
  },

  isLoggedOut: function () {
    return !User.isLoggedIn();
  },

  profile: function () {
    return User
      .get()
      .profile;
  },

  create: function (opts, callback) {
    Accounts.createUser(opts, callback);
  }
};
