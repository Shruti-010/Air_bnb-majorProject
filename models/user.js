const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportlocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }, //passport-local-mongoose by default add username and password into the schema
});

userSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model("User", userSchema);
