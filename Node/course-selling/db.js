const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  fname: { type: String },
  lname: { type: String },
  password: { type: String },
});
const creatorSchema = new Schema({
  email: { type: String, unqiue: true },
  fname: { type: String },
  lname: { type: String },
  password: { type: String },
});
const courseSchema = new Schema({
  title: { type: String },
  desc: { type: String },
  price: { type: Number },
  imageUrl: { type: String },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "creator",
    required: true,
  },
});

const purchaseSchema=new Schema({
    courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
})

const userModel=mongoose.model("user",userSchema);
const creatorModel=mongoose.model("creator",creatorSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
  userModel,
  creatorModel,
  purchaseModel,
  courseModel
}