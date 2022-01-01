const router = require("express").Router();
const {authentificate, getAllMods, createMod } = require("../controllers/moderatorCtrl");

router.get("/", getAllMods);
router.post("/", createMod);
router.post("/authentificate", authentificate);

module.exports = router;
