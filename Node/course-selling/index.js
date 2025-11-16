const express=require('express')
// const jwt= require('jsonwebtoken')
const mongoose=require('mongoose')
const { userRouter }=require('./routes/user')
const { courseRouter }=require('./routes/course')
const { adminRouter }=require('./routes/admin')
require("dotenv").config();

const DB_CONN_STRING = process.env.MONGO_URI;

const app=express()
app.use(express.json()); 

app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

async function connectDB() {
  try {
    await mongoose.connect(DB_CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit app if DB connection fails
  }
}

// Start server after DB connection
connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`🚀 Server running on port ${3000}`);
  });
});