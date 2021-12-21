const router = require("express").router();
const { getAllSellers, createSeller, addProfileDescription } = require("../controllers/sellerCtrl");


router.get("/", getAllSellers);
router.post("/", createSeller);
router.post("/profile", addProfileDescription);


module.exports = router;
