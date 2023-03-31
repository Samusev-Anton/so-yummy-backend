const signUp = require("./signUp");
const signIn = require("./signIn");
const logOut = require("./logOut");
const updateSubscription = require("./updateSubscription");
const avatarUpdate = require("./avatarUpdate");
const updateAvatarToCloud = require("./uplodeAvatarToCloud");
const verifyEmail = require("./verifyEmail");
const sendTempPassword = require("./sendTempPassword");
const changePassword = require("./changePassword");

module.exports = {
  signUp,
  signIn,
  logOut,
  updateSubscription,
  avatarUpdate,
  updateAvatarToCloud,
  verifyEmail,
  sendTempPassword,
  changePassword,
};
