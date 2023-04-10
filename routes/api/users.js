const express = require("express");

const router = express.Router();
const { users: ctrl } = require("../../controllers");
const {
  auth,
  ctrlWrraper,
  validation,
  uploadAvatar,
} = require("../../middlewares");

// закоментировал ввиду ненадобности
// const { uploadCloud } = require("../../middlewares/uploadCloud");
const {
  joiSignUpSchema,
  joiSignInSchema,
  joiSubscriptionSchema,
} = require("../../models/user");

router.post("/signup", validation(joiSignUpSchema), ctrlWrraper(ctrl.signUp));

router.post("/signin", validation(joiSignInSchema), ctrlWrraper(ctrl.signIn));

router.post("/logout", auth, ctrlWrraper(ctrl.logOut));

router.post("/subscribe", auth, ctrlWrraper(ctrl.subscribe));

router.patch(
  "/subscription",
  auth,
  validation(joiSubscriptionSchema),
  ctrlWrraper(ctrl.updateSubscription)
);

// для работы Cloudinary
router.patch(
  "/avatars",
  auth,
  uploadAvatar.single("avatar"),
  ctrlWrraper(ctrl.updateAvatarImage)
);

router.patch(
  "/profile",
  auth,
  uploadAvatar.single("avatar"),
  ctrlWrraper(ctrl.updateProfile)
);

router.patch("/verify/:verificationToken", ctrlWrraper(ctrl.verifyEmail));

router.get("/:email", ctrlWrraper(ctrl.sendTempPassword));

router.patch("/password", ctrlWrraper(ctrl.changePassword));

module.exports = router;
