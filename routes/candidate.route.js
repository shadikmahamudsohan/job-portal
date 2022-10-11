const express = require('express');
const candidateCollection = require('../controller/candidate.controller');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.route("/jobs").get(verifyToken, candidateCollection.getCandidateJobs);
router.route("/jobs/:id").get(verifyToken, candidateCollection.getCandidateJobById);
router.route("/jobs/:id/apply").post(verifyToken, candidateCollection.applyJobById);

// have to make the /jobs/:id/apply

module.exports = router;