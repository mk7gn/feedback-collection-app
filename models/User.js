const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String, // name.givenName
  lastName: String // name.familyName
});

mongoose.model('users', userSchema)
