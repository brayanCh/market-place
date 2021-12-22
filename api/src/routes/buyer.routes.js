const router = require("express").Router();
const { getAllSellers, createSeller, actualizeProfile, changeName } = require("../controllers/sellerCtrl");


router.get("/", getAllSellers);
router.post("/", createSeller);
router.post("/profile", actualizeProfile);
router.post("/name", changeName);


module.exports = router;
