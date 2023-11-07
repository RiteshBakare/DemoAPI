const mongoose = require("mongoose");


const DemoSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    no : {
        type : String,
        require : true
    },
},{timestamps:true});

module.exports = mongoose.model("Demo",DemoSchema);