import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from "./data/users.js";
import products from "./data/products.js";
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from "./config/db.js";


dotenv.config()
connectDB()

const importData=async()=>{
    try {
        await Order.deleteMany();
        await User.deleteMany();
        // await Product.deleteMany();
        const createdUsers=await User.insertMany(users);
        console.log()
        const adminUser=createdUsers[0]._id

        const sampleProducts=products.map(product=>{
            return{
                ...product,user:adminUser
            }
        })
        console.log("sample",sampleProducts)
        await Product.insertMany(sampleProducts)
        console.log("Data Imported")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destoryData=async()=>{
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
       
        console.log("Data Destroyed")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destoryData()
}
else{
    importData()
}