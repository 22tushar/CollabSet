const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    skill: { type: String },
  },
);

const Skill = mongoose.model("Skill", skillsSchema);

exports.Skill = Skill;
