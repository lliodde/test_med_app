const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the structure of the User document
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // No two users can have the same email
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Automatically set the current date
    },
});

// Create and export the User model
const User = mongoose.model('user', UserSchema);
module.exports = User;