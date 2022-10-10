const candidateService = require("../service/candidate.service");

exports.getManagerJob = async (req, res) => {
    try {
        const result = await candidateService.getJobService();
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the jobs",
        });
    }
};

exports.JobDetailsById = async (req, res) => {
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