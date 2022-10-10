const Jobs = require("../models/Jobs");

exports.createJobService = async (data) => {
    return await Jobs.create(data);
};

exports.getJobService = async (managerId) => {
    return await Jobs.find({ managerId });
};

exports.getJobsByIdService = async (id) => {
    return await Jobs.findOne({ _id: id });
};

exports.updateJobService = async (id, data) => {
    return await Jobs.updateOne({ _id: id }, data, {
        runValidators: true
    });
};
