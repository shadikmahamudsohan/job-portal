const Apply = require("../models/Apply");
const Jobs = require("../models/Jobs");

exports.getJobService = async (query) => {
    const queries = {};

    if (query.sort) {
        const sortBy = query.sort.split(',').join(" ");
        queries.sortBy = sortBy;
    }

    const result = await Jobs
        .find({ ...query })
        .sort(queries.sortBy);

    return result;
};

exports.getJobsByIdService = async (id) => {
    return await Jobs.findOne({ _id: id });
};

exports.applyJobByIdService = async (email, job) => {
    return await Apply.create({ email, job });
};

exports.getAppliedByEmail = async (email) => {
    return await Apply.findOne({ email });
};