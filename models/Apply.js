const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const applySchema = mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
    },
    job: {
        jobType: String,
        jobId: ObjectId
    }

}, {
    timestamps: true
});


const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;