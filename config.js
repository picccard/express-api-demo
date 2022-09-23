const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DB_CON } = process.env;

const connectDB = async () => {
    await mongoose.connect(`${DB_CON}`)     
    console.log(`database connected successfully`)
};

module.exports = connectDB;