const express = require('express');
const hiringManagerCollection = require('../controller/hiringManager.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.route("/jobs").post(verifyToken, authorization("hiringManager"), hiringManagerCollection.createJob);
router.route("/manager/jobs").get(verifyToken, authorization("hiringManager"), hiringManagerCollection.getManagerJob);
router.route("/manager/jobs/:id").get(verifyToken, authorization("hiringManager"), hiringManagerCollection.JobDetailsById);
router.route("/jobs/:id").patch(verifyToken, authorization("hiringManager"), hiringManagerCollection.updateJobById);

module.exports = router;
