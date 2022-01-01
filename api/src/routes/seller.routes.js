const router = require("express").Router();
const { validate, authentificate, createSeller, actualizeProfile, changeName, changeBanState } = require("../controllers/sellerCtrl");


router.post("/", createSeller);
router.post("/authentificate", authentificate);

router.post("/profile", actualizeProfile);
router.post("/name", changeName);
router.post("/ban", changeBanState);


module.exports = router;
