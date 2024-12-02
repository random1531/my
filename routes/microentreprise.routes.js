const router = require("express").Router();
const MicroentrepriseControllers = require("../controller/microentreprise.controllers");
const verifyToken = require("../middleware/tokenVerify");

router.post("/create", verifyToken, MicroentrepriseControllers.register);
// router.patch("/update/:id", verifyToken, MicroentrepriseControllers.update);
router.get("/all", verifyToken, MicroentrepriseControllers.getAll);
router.get("/one/:id", verifyToken, MicroentrepriseControllers.getOne);
router.delete("/delete/:id", verifyToken, MicroentrepriseControllers.delete);

module.exports = router;