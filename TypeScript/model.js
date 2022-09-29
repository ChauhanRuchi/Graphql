const { Schema } = require("mongoose");
const { mongoose } = require("./mongoose");

const Demo = mongoose.Schema({
   
  title: { type: String, trim: true },
  decription: { type: String, trim: true },
  price: { type: Number, trim: true },
  date: { type: Date, trim: true },
  creator:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
 
});

module.exports = mongoose.model("model", Demo);
