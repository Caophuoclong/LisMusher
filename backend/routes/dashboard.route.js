const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/:id", dashboardController.response);
router.post("/:id/delete", dashboardController.delete);
router.post("/:id/add", dashboardController.add);
router.post("/:id/createroom", dashboardController.createRoom);
router.post("/:id/joinroom", dashboardController.joinRoom);

module.exports = router;
