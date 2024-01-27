// routes/auth.mjs

import express from 'express';
import { check, validationResult } from 'express-validator';
import { addMember, allMembers} from '../controllers/membersController.mjs';

const router = express.Router();

router.post(
  '/',
  addMember
);
router.get(
  '/',
  allMembers
);

// Rest of your code...
export default router