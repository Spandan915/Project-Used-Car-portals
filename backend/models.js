const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  // Add other fields as needed
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Hashed password in a real-world scenario
  // Add other fields as needed
});

const Car = mongoose.model('Car', carSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Car, User };
