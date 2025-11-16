const { Router } = require("express");
require("dotenv").config();
const JWT_SECRETD = process.env.JWT_SECRET_ADMIN;
const creatorAuth = require("../admin_auth");
const { creatorModel, courseModel } = require("../db");
const adminRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async function (req, res) {
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

    await creatorModel.create({
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
adminRouter.post("/signin", async function (req, res) {
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
    const creator = await creatorModel.findOne({
      email: email,
    });
    const { password } = req.body;

    const matchedPassword = await bcrypt.compare(password, creator.password);
    if (creator && matchedPassword) {
      const token = jwt.sign(
        {
          creatorId: creator._id,
        },
        JWT_SECRETD
      );

      res.json({
        token: token,
        message: "Admin Sign-In",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
adminRouter.post("/createcourse", creatorAuth, async function (req, res) {
  try {
    const creatorId = req.creatorId;
    const { title, desc, price, imageUrl } = req.body;
    const newCourse = await courseModel.create({
      creatorId,
      title,
      desc,
      price,
      imageUrl,
    });
    res.json({
      newCourse,
    });
  } catch (err) {
    res.status(403).json({
      err,
    });
  }
  res.json({
    message: "Admin createcourse",
  });
});
adminRouter.post("/deletecourse", function (req, res) {
  res.json({
    message: "Admin deletecourse",
  });
});
adminRouter.put("/editcourse/:cid", creatorAuth, async function (req, res) {
  const creatorId = req.creatorId;
  const courseId = req.params.cid;
  const { title, desc, price, imageUrl } = req.body;

  const course = await courseModel.findOne({
    _id: courseId,
    creatorId
  });

  if (!course) {
    return res.status(401).json({
      message: "No course available",
    });
  }
  const updatedCourse = await courseModel.updateOne(
    {
      _id: courseId,
    },
    {
      title,
      desc,
      price,
      imageUrl,
    }
  );
  res.json({
    message:"Course Updated",
    courseId: courseId
  });
});

adminRouter.get('/view', creatorAuth,async function(req,res){
    const creatorId = req.creatorId;
    
try{
 const course=await courseModel.find({
      creatorId
    })
     res.json({
      message:"Course updated",
      courseId: course
     })
}catch(err){
  res.status(401).json({
    err
  })
}
   
})

module.exports = {
  adminRouter: adminRouter,
};
