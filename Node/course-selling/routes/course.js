const { Router } = require("express");
const courseRouter = Router();
const { courseModel, purchaseModel } = require("../db");
const userAuth = require("../user_auth");

courseRouter.post("/purchase", userAuth, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  const purchases = await purchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "Course purchased",
  });
});
courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});

  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
