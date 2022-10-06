const { Schema } = require("mongoose");
const { mongoose } = require("./mongoose");

const Demo = mongoose.Schema({
    email:{type:String},
    password: { type: String, trim: true },
    createdEvents:[{
    type:Schema.Types.ObjectId,
    ref:'Event'
  }]
});

module.exports = mongoose.model("User", Demo);
