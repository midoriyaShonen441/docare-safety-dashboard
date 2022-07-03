const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const case_info = new Schema(
    {
        locateable_id: String,
        latitude: Number,
        longitude: Number
    },
    { timestamps: true }
)

module.exports = mongoose.Model("case_info", case_info)