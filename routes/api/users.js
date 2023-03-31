const express = require("express");

const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { auth, ctrlWrraper, validation, upload } = require("../../middlewares");
const { uploadCloud } = require("../../middlewares/uploadCloud");
const {
  joiSignUpSchema,
  joiSignInSchema,
  joiSubscriptionSchema,
} = require("../../models/user");

router.post("/signup", validation(joiSignUpSchema), ctrlWrraper(ctrl.signUp));

router.post("/signin", validation(joiSignInSchema), ctrlWrraper(ctrl.signIn));

router.get("/logout", auth, ctrlWrraper(ctrl.logOut));

router.patch(
  "/subscription",
  auth,
  validation(joiSubscriptionSchema),
  ctrlWrraper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  // validation(joiAvatarSchema),
  ctrlWrraper(ctrl.avatarUpdate)
);

router.patch(
  "/cloudavatars",
  auth,
  uploadCloud.single("avatar"),
  // validation(joiAvatarSchema),
  ctrlWrraper(ctrl.updateAvatarToCloud)
);

router.patch("/verify/:verificationToken", ctrlWrraper(ctrl.verifyEmail));

router.get("/:email", ctrlWrraper(ctrl.sendTempPassword));

router.patch("/password", ctrlWrraper(ctrl.changePassword));

module.exports = router;
