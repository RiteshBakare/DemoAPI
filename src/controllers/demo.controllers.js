const { model } = require("mongoose")
const DemoSchema = require("../models/demo.model");


const myList = []

const addData = async (req,res) => {
    
    const {name,no} = req.body;

    const result = await DemoSchema.create({
        name : name,
        no : no
    });

    res.status(201).json({my_data:result});
}

const showData = async (req,res) => {
    try {
        const allData = await DemoSchema.find();
        res.status(200).json({ data: allData });
    } 
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
}

module.exports = {addData,showData};