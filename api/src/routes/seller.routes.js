const router = require("express").Router();
const { getAllSellers, createSeller, actualizeProfile, changeName, changeBanState } = require("../controllers/sellerCtrl");


router.get("/", getAllSellers);
router.post("/", createSeller);

router.post("/profile", actualizeProfile);
router.post("/name", changeName);
router.post("/ban", changeBanState);


module.exports = router;
