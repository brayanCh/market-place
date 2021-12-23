const router = require("express").Router();
const { getAllProducts, createProduct, actualizeTags, changeName, findBySeller } = require("../controllers/productCtrl");


router.get("/", getAllProducts);
router.post("/", createProduct);

router.post("/name", changeName);
router.post("/tags", actualizeTags);
router.post("/find-by-seller", findBySeller);


module.exports = router;
