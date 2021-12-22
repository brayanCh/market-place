const router = require("express").Router();
const { getAllMods, createMod } = require("../controllers/moderatorCtrl");

router.get("/", getAllMods);
router.post("/", createMod);

module.exports = router;
