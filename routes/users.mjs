// routes/users.mjs

import express from 'express';
import { addUser, allUsers, deleteOneUser, updateUser, oneUser, } from '../controllers/usersController.mjs';

const router = express.Router();
router.post(
    '/',
    addUser
);
router.get(
    '/',
    allUsers
);
router.get(
    '/:id',
    oneUser
);
router.put(
    '/update/:id',
    updateUser
);
router.post(
    '/delete/:id',
    deleteOneUser
);

// Rest of your code...
export default router
