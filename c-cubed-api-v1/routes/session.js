const express = require("express");
const router = express.Router();
const controller = require('../controllers/session.js')

router.get("/session/callback", controller.get)

module.exports = router;