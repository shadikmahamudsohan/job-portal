const User = require("../models/User");

exports.getCandidatesService = async () => {
    return await User.find({ role: "candidate" });
};
exports.getHiringManagersService = async () => {
    return await User.find({ role: "hiringManager" });
};

exports.getCandidatesByIdService = async (id) => {
    return await User.findOne({ _id: id });
};

exports.updateHiringManagersService = async (id, data) => {
    console.log(data);
    return await User.updateOne({ _id: id }, { role: data }, {
        runValidators: true
    });
};
