const express = require('express');
const hiringManagerCollection = require('../controller/hiringManager.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// router.use(verifyToken);
// router.use(authorization("hiringManager"));
// router.use(authorization("admin"));

router.route("/jobs").post(verifyToken, authorization("admin"), hiringManagerCollection.createJob);
router.route("/manager/jobs").get(verifyToken, authorization("admin"), hiringManagerCollection.getManagerJob);
router.route("/manager/jobs/:id").get(verifyToken, authorization("admin"), hiringManagerCollection.JobDetailsById);
router.route("/jobs/:id").patch(verifyToken, authorization("admin"), hiringManagerCollection.updateJobById);

module.exports = router;
