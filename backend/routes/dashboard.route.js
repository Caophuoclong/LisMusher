const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/:id", dashboardController.response);
router.post("/:id/delete", dashboardController.delete);
router.post("/:id/add", dashboardController.add);
// router.post("/", dashboardController.postHome);

module.exports = router;
