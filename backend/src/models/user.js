// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({

//     name : {type:String, require:true},
//     email :{type:String, require:true, unique:true, lowercase:true, trim:true},
//     password:{type:String, require:true},
//     countryCode : {type:String, require:[true, "Country Code is required"]},
//     phone : {type:String, require:true},
//     isVarified:{type:Boolean, default:false},

// })

// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false, // Exclude password when querying user by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilePic: {
      type: String, // store image URL or file path
      default: "default.jpg",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("User", userSchema)