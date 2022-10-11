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
    const jobType = job.jobType;
    const jobId = job.jobId;
    return await Apply.create({ email, jobType, jobId });
};

exports.getAppliedById = async (id) => {
    return await Apply.findOne({ jobId: id });
};