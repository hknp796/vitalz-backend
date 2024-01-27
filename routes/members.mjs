// routes/auth.mjs

import express from 'express';
import { addMember, allMembers, deleteOneMember,updateMember } from '../controllers/membersController.mjs';

const router = express.Router();
router.post(
  '/',
  addMember
);
router.get(
  '/',
  allMembers
);
router.put(
  '/update/:id',
  updateMember
);
router.post(
  '/delete/:id',
  deleteOneMember
);
// Rest of your code...
export default router