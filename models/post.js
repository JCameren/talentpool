const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    salary: { type: Number, required: true },
    description: { type: String, required: true },
    employer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    applicants: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

module.exports = mongoose.model("Post", postSchema)