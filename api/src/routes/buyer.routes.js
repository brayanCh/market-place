const router = require("express").Router();
const { getAllBuyers, authentificate, createBuyer, actualizePreferences, changeName, changeBanState } = require("../controllers/buyerCtrl");


router.get("/", getAllBuyers);
router.post("/", createBuyer);
router.post("/authentificate", authentificate);

router.post("/name", changeName);
router.post("/preferences", actualizePreferences);
router.post("/ban", changeBanState);


module.exports = router;
