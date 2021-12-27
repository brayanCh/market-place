const router = require("express").Router();
const { validate, createSeller, actualizeProfile, changeName, changeBanState } = require("../controllers/sellerCtrl");


router.post("/", createSeller);
router.post("/validate");

router.post("/profile", actualizeProfile);
router.post("/name", changeName);
router.post("/ban", changeBanState);


module.exports = router;
