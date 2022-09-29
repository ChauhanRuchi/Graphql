const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Demo");

module.exports = { mongoose };
