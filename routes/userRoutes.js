const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getuser);
router.post("/", userController.postuser);
router.post("/:id", userController.dltuser);
router.get("/edit/:id", userController.updateuser);
router.get("/:id", userController.getbyiduser);


module.exports = router;
