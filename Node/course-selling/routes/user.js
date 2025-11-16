const{ Router}=require('express')
const userRouter=Router();
const { userModel, purchaseModel, courseModel} = require('../db')
require("dotenv").config();
const userAuth=require('../user_auth')

const { z } = require("zod");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET_USER;


userRouter.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(7).max(50).email(),
    fname: z
      .string()
      .min(3)
      .max(50)
      .regex(/[a-z]/, "First name must contain only character"),
    lname: z
      .string()
      .min(3)
      .max(50)
      .regex(/[a-z]/, "First name must contain only character"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters")
      .regex(/[0-9]/, "Password must contain at least one digit")
      .regex(/[A-Z]/, "Password must contain at least one uppercase character")
      .regex(
        /[$&+,:;=?@#|'<>.^*()%!-]/,
        "Password must contain at least one special character"
      ),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      message: "Invalid Data format",
      error: parsedData.error.issues,
    });
  }
  try {
    const { email, fname, lname, password } = parsedData.data;

    const hashedPassword = await bcrypt.hash(password, 8);

    await userModel.create({
      email,
      fname,
      lname,
      password: hashedPassword,
    });
    res.status(201).json({ message: "You are Signed Up" });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    console.error("Error in signup:", e);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: e.message });
  }
});
userRouter.post("/signin", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(7).max(50).email(),
  });

  const parsedEmail = requiredBody.safeParse(req.body);
  if (!parsedEmail.success) {
    return res.status(400).json({
      message: "Invalid Email format",
      error: parsedEmail.error.issues,
    });
  }

  try {
    const { email } = parsedEmail.data;
    const user = await userModel.findOne({
      email: email,
    });
    const { password } = req.body;

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (user && matchedPassword) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        JWT_SECRET
      );

      res.json({
        token: token,
      });
    }
  } catch (err) {
    console.log(err);
  }
  res.json({
    message: "User Sign-Ip",
  });
});
userRouter.get('/mycourses',userAuth, async function(req,res){
    const userId=req.userId;

    const purchases=await purchaseModel.find({
      userId,
    })

      const courseData=await courseModel.find({
        _id: { $in: purchases.map(x =>x.courseId) }
      })

    res.json({
      courseData
    })
})

module.exports={
    userRouter:userRouter
}