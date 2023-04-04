const express = require("express");

const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { favorits } = require("../../controllers");
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

router.get("/logout", auth, ctrlWrraper(ctrl.logOut));

router.get("/subscribe", auth, ctrlWrraper(ctrl.subscribe));

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

// Закоментировал строки ввиду ненадобности
// router.patch(
//   "/avatars",
//   authenticate,
//   uploadAvatar.single("avatar"),
//   ctrl.updateAvatarImage
// );

// router.patch(
//   "/cloudavatars",
//   auth,
//   uploadCloud.single("avatar"),
//   // validation(joiAvatarSchema),
//   ctrlWrraper(ctrl.updateAvatarToCloud)
// );

router.patch("/verify/:verificationToken", ctrlWrraper(ctrl.verifyEmail));

router.get("/:email", ctrlWrraper(ctrl.sendTempPassword));

router.patch("/password", ctrlWrraper(ctrl.changePassword));

///favorite
router.get(
  "/favorite/:favorite",
  auth,
  ctrlWrraper(favorits.addRecipeToFavorits)
);
router.post("/favorite", auth, ctrlWrraper(favorits.getFavoritsRecipe));

router.delete(
  "/favorite/:favorite",
  auth,
  ctrlWrraper(favorits.deleteFavoritsRecipe)
);

module.exports = router;
