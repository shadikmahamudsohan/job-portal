const express = require('express');
const adminCollection = require('../controller/admin.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.route("/candidates").get(verifyToken, authorization("admin"), adminCollection.getCandidates);
router.route("/candidates/:id").get(verifyToken, authorization("admin"), adminCollection.getCandidatesById);
router.route("/hiring-managers").get(verifyToken, authorization("admin"), adminCollection.getHiringManagers);
router.route("/hiring-managers/:id").patch(verifyToken, authorization("admin"), adminCollection.updateHiringManagers);

module.exports = router;