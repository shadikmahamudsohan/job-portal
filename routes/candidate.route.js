const express = require('express');
const candidateCollection = require('../controller/candidate.controller');
const { uploader } = require('../middleware/uploader');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.route("/jobs").get(verifyToken, candidateCollection.getCandidateJobs);
router.route("/jobs/:id").get(verifyToken, candidateCollection.getCandidateJobById);
router.route("/jobs/:id/apply").post(verifyToken, uploader.single("pdf"), candidateCollection.applyJobById,);

module.exports = router;