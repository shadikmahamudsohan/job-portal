exports.getJobService = async () => {
    return await Jobs.find({});
};

exports.getJobsByIdService = async (id) => {
    return await Jobs.findOne({ _id: id });
};
