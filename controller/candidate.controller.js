const candidateService = require("../service/candidate.service");

exports.getCandidateJobs = async (req, res) => {
    try {
        const result = await candidateService.getJobService(req.query);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};

exports.getCandidateJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await candidateService.getJobsByIdService(id);

        if (!result) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a job with this id"
            });
        }

        res.status(200).json({
            status: "success",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands",
        });
    }
};

exports.applyJobById = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await candidateService.getJobsByIdService(id);

        if (!job) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find the job with this id"
            });
        }

        const appleData = await candidateService.getAppliedByEmail(req.user.email);

        if (appleData.email === req.user.email) {
            return res.status(405).json({
                status: "fail",
                error: "You already applied for this job"
            });
        }

        const deadlineEnded = new Date() > new Date(job.deadline);

        if (deadlineEnded) {
            return res.status(401).json({
                status: "fail",
                error: "Sorry. The deadline is ended"
            });
        }

        const jobData = {
            jobType: job.jobType,
            jobId: id
        };

        const apply = await candidateService.applyJobByIdService(req.user.email, jobData);

        if (!apply) {
            res.status(400).json({
                status: "fail",
                error: "Couldn't apply in this job",
            });
        }

        res.status(200).json({
            status: "success",
            data: job,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands",
        });
    }
};