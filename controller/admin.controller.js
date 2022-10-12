const hiringMangerService = require("../service/admin.service");

exports.getCandidates = async (req, res) => {
    try {
        const result = await hiringMangerService.getCandidatesService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the candidate",
        });
    }
};
exports.getHiringManagers = async (req, res) => {
    try {
        const result = await hiringMangerService.getHiringManagersService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the hiring managers",
        });
    }
};

exports.getCandidatesById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await hiringMangerService.getCandidatesByIdService(id);

        if (!result) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find candidate with this id"
            });
        }

        res.status(200).json({
            status: "success",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the candidate",
        });
    }
};

exports.updateHiringManagers = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.body.role) {
            return res.status(401).json({
                status: "fail",
                error: "You can only update user role.",
            });
        }
        console.log(req.body.role !== "hiringManager" && req.body.role !== "candidate");
        if (req.body.role !== "hiringManager" && req.body.role !== "candidate") {
            return res.status(401).json({
                status: "fail",
                error: "You can only change role to hiringManager or candidate",
            });
        }

        const result = await hiringMangerService.updateHiringManagersService(id, req.body.role);

        res.status(200).json({
            status: "success",
            message: "Successfully updated the user role"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the user role",
        });
    }
};