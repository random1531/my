const router = require("express").Router();
const FactureControllers = require("../controller/facture.controllers");
const verifyToken = require("../middleware/tokenVerify");

router.post("/create", verifyToken, FactureControllers.create);
router.get("/read", verifyToken, FactureControllers.read);
router.patch("/update/:id", verifyToken, FactureControllers.update);
router.delete("/delete/:id", verifyToken, FactureControllers.delete);

router.get("/read/:id", verifyToken, FactureControllers.readById);

module.exports = router;