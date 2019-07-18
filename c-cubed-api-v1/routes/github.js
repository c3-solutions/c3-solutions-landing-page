const express = require("express");
const router = express.Router();
const cors = require('cors');
const conf = require("./cors");
const controller = require('../controllers/github.js')

router.options("*", cors(conf.corsOptionsDelegate));
router.get("/github/members", cors(conf.corsOptionsDelegate), conf.preFlight, controller.getMembers);

module.exports = router;