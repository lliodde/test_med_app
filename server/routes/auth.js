const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); // We will need to create this User model
const bcrypt = require('bcryptjs');
const jwt = a= require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_string'; // Replace with a real secret

// ROUTE 1: Create a User using: POST "/api/auth/register". No login required.
router.post(
  '/register',
  [
    // Validation checks for the request body
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 chars long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: 'Sorry, a user with this email already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create a new user in the database
      user = await User.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        phone: req.body.phone,
      });

      // Create JWT token data
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Send the token back as a response
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

// This is the original test route, you can keep it for testing
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;