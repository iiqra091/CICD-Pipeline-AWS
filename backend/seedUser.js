const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashed = await bcrypt.hash("123456", 10);

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashed
  });

  console.log("User created");
  process.exit();
});