const hiringMangerService = require("../service/hiringManager.service");

exports.createJob = async (req, res) => {
    try {
        const result = await hiringMangerService.createJobService(req.body);
        result.addManagerId(req.user?.id);
        result.setDeadline(req.body.deadline);

        await result.save({ validateBeforeSave: false });

        res.status(200).json({
            status: "success",
            message: "Job created successfully!",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message,
        });
    }
};

exports.getManagerJob = async (req, res) => {
    try {
        const managerId = req.user.id;
        const result = await hiringMangerService.getJobService(managerId);

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
        const result = await hiringMangerService.getJobsByIdService(id);

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
            error: "Couldn't get the job",
        });
    }
};

exports.updateJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await hiringMangerService.updateJobService(id, req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully updated the job"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the job",
        });
    }
};