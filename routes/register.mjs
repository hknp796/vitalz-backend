// routes/register.js

import express from 'express';
import { check, validationResult } from 'express-validator';
import { registerUser } from '../controllers/registrationController.mjs';

const router = express.Router();
router.post(
  '/',
  [
    check('username', 'Username is required').notEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  registerUser
);

export default router;
