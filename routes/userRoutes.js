const express = require('express');
const router = express.Router();

const { home } = require("../controllers/user");
//import all the required api functions from '../controllers/user'

const { protect } = require('../middleware/auth');

router.route("/").get(protect, home);

module.exports = router;