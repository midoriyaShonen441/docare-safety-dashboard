const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const floor_plan = new Schema({
    zone: [{
        building: [{
            floor: [{
                room: [
                    { type: String }
                ]
            }]
        }]
    }]
})

module.exports = mongoose.Model("floo_plan", floor_plan)