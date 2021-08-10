const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
router.get("/getmemberinroom", dashboardController.getMember);
router.get("/:id", dashboardController.response);
router.post("/:id/delete", dashboardController.delete);
router.post("/:id/add", dashboardController.add);
router.post("/createroom", dashboardController.createRoom);
router.post("/joinroom", dashboardController.joinRoom);

module.exports = router;
