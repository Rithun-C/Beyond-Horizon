const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [6, "password should be atleast of 6 length"],
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength: 6,
    // custom validation
    validate: [function () {
        return this.password == this.confirmPassword;
    }, "password should be equal to confirm password"]
    },
    branch: {
    type: String,
    required: true,
    enum: ["AIML", "ECE", "ISE", "DS", "EEE", "MECH"]
    },
  profile: {
    avatar: {
      type: String,
      default: "C:\\Users\\RITHUN\\Desktop\\ARISE\\Backend\\utility\\graduate-student-avatar.png"
    },
    joinedAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "student",
      enum: ["student", "faculty", "admin", "moderator"]
    },
    isPremium: {
      type: Boolean,
      default: false
    }
  }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
