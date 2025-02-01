// routes/coaches.mjs

import express from 'express';
import { addCoach, allCoaches, deleteOneCoach, updateCoach, oneCoach } from '../controllers/coachesController.mjs';

const router = express.Router();
router.post(
    '/',
    addCoach
);
router.get(
    '/',
    allCoaches
);
router.get(
    '/:id',
    oneCoach
);
router.put(
    '/update/:id',
    updateCoach
);
router.post(
    '/delete/:id',
    deleteOneCoach
);
// Rest of your code...
export default router