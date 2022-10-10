const express = require('express');
const candidateCollection = require('../controller/candidate.controller');
const router = express.Router();

router.route("/jobs").get(candidateCollection.getJobs);
router.route("/jobs/:id").get(candidateCollection.getJobsById);

// have to make the /jobs/:id/apply

module.exports = router;