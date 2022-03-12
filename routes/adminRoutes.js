const express = require('express');
const router = express.Router();

const { adminDashboard, addTemplate, deleteTemplate, editTemplate } = require("../controllers/admin");

const { admin } = require('../middleware/auth');

router.route("/").get(admin, adminDashboard);

router.route("/addTemplate").post(admin, addTemplate);

router.route("/deleteTemplate").post(admin, deleteTemplate);

router.route("/editTemplate").post(admin, editTemplate);

module.exports = router;