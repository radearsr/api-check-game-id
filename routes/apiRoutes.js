const { Router } = require("express");
const router = Router();
const apiController = require("../controllers/apiControllers");

router.post("/check", apiController.postCheckGameId);

module.exports = router;
