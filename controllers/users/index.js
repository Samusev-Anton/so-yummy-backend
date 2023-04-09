const signUp = require("./signUp");
const signIn = require("./signIn");
const logOut = require("./logOut");
const updateSubscription = require("./updateSubscription");
const verifyEmail = require("./verifyEmail");
const sendTempPassword = require("./sendTempPassword");
const changePassword = require("./changePassword");
const subscribe = require("./subscribe");
const updateAvatarImage = require("./updateAvatarImage");
const updateProfile = require("./updateProfile");

module.exports = {
  signUp,
  signIn,
  logOut,
  subscribe,
  updateSubscription,
  verifyEmail,
  sendTempPassword,
  changePassword,
  updateAvatarImage,
  updateProfile,
};
