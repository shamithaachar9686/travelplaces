/* eslint-disable no-undef */
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth'); // Import auth middleware
const User = require('../models/user'); // Import User model

// Example protected route using auth middleware
router.get('/profile', auth, async (req, res) => {
  try {
    // Fetch user profile based on req.user.id
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
