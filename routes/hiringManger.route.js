const express = require('express');
const hiringManagerCollection = require('../controller/hiringManager.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.use(verifyToken);
router.use(authorization("hiringManager"));

router.route("/jobs").post(hiringManagerCollection.createJob);
router.route("/manager/jobs").get(hiringManagerCollection.getManagerJob);
router.route("/manager/jobs/:id").get(hiringManagerCollection.JobDetailsById);
router.route("/jobs/:id").patch(hiringManagerCollection.updateJobById);

module.exports = router;