const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const generateAuthToken = require("../utils/generateAuthToken");
const router = express.Router();

router.post("/", async (req, res) => {
  // const schema = Joi.object({
  //   name: Joi.string().min(3).max(30).required(),
  //   email: Joi.string().min(3).max(200).required().email(),
  //   password: Joi.string().min(6).max(200).required(),
  // });

  // const { error } = schema.validate(req.body);

  // if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists...");

  console.log("here");

  const { isAdmin, name,desc, email, password ,reqSent,reqAccept,C,T} = req.body;
  
  console.log(isAdmin)
  user = new User({ isAdmin , name,desc, email, password ,reqSent,reqAccept,C,T});
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  
  await user.save();
  if(isAdmin == 'TPO') await User.findOneAndUpdate({email:req.body.email } , {T:true });
  else   await User.findOneAndUpdate({email:req.body.email } ,{ C:true });

  const token = generateAuthToken(user);

  res.send(token);
});

module.exports = router;