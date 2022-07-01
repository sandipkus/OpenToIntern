const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {type: String, required: 'Name name is required', lowercase:true, unique:true, trim: true },

    fullName: {type: String, required: 'Full name is required', trim: true},

    logoLink: {type: String, required: 'Logo link is required', trim: true},

    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("college", collegeSchema)