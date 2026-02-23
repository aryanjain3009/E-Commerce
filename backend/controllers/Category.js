const Category=require("../models/Category")

exports.getAll=async(req,res)=>{
    try {
        const result=await Category.find({})
        res.status(100).json(result)
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Error fetching categories"})
    }
}