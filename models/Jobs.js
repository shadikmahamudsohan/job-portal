const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a job name"],
        lowercase: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a job price"]
    },

    salary: {
        type: Number,
        required: [true, "Please set the salary amount"]
    },

    managerId: {
        type: ObjectId,
    }
}, {
    timestamps: true
});

jobSchema.methods.addManagerId = function (id) {
    console.log("id in addManagerId", id);
    this.managerId = id;
};

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;