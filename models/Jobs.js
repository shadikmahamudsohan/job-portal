const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    jobType: {
        type: String,
        trim: true,
        required: [true, "Please provide a job name"],
        lowercase: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a job price"]
    },
    location: {
        type: String,
        required: [true, "Please provide a job location"]
    },
    salaryRange: {
        type: Number,
        required: [true, "Please set the salary amount"]
    },
    applied: [{
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
    }],

    managerId: ObjectId,
    deadline: {
        type: String,
        required: [true, "Please set a deadline for this job"]
    },
}, {
    timestamps: true
});

jobSchema.methods.addManagerId = function (id) {
    console.log("id in addManagerId", id);
    this.managerId = id;
};

jobSchema.methods.setDeadline = function (day) {
    const date = new Date();
    console.log("current date", date);
    date.setDate(date.getDate() + day);
    this.deadline = date;
};

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;