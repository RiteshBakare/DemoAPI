const express = require("express");
const demoRoutes = require("./routes/demoRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json()); // use this for communacation with json only

app.use("/demo",demoRoutes)

const PORT = process.env.PORT || 5000;
// -------------------------------------------------------------------------------

// const CONNECTION_STRING = "mongodb+srv://bakareritesh1729:Rajaramat2003@cluster0.5z8czg0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected ");
    app.listen(PORT,()=>{
        console.log("Server Started on PORT "+PORT)
        console.log("site: http://localhost:5000/")
    });
}).catch((error)=>{
    console.log(error);
});


// -------------------------------------------------------------------------------

app.get("/",(req,res)=> {
    res.status(200).send("Demo API App")
});

// -------------------------------------------------------------------------------
const studentList = [];
app.get("/students",(req,res)=>{
    res.send(studentList);
});
app.post("/students",(req,res)=>{
    const newData = req.body; // Get the data from the request body
    studentList.push(newData); // Store the data in the array
    res.json({ message: 'Data saved successfully' });
})

// -------------------------------------------------------------------------------

