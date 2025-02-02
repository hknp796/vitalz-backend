users// routes/plans.mjs

import express from 'express';
import { addPlan, allPlans, deleteOnePlan, updatePlan, onePlan } from '../controllers/plansController.mjs';

const router = express.Router();
router.post(
    '/',
    addPlan
);
router.get(
    '/',
    allPlans
);
router.get(
    '/:id',
    onePlan
);
router.put(
    '/update/:id',
    updatePlan
);
router.post(
    '/delete/:id',
    deleteOnePlan
);
// Rest of your code...
export default router