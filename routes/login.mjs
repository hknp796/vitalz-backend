// routes/auth.mjs

import express from 'express';
import { check, validationResult } from 'express-validator';
import { loginUser } from '../controllers/loginController.mjs';

const router = express.Router();

// Route to handle user login
router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').notEmpty(),
  ],
  loginUser // Use the loginUser function from the controller
);

// Rest of your code...
export default router