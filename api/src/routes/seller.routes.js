const router = require("express").Router();
const { getAllSellers, createSeller, addProfileDescription } = require("../controllers/sellerCtrl");


router.get("/", getAllSellers);
router.post("/", createSeller);
router.post("/profile", addProfileDescription);


module.exports = router;
