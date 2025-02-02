// routes/inventories.mjs

import express from 'express';
import { addInventory, allInventories, deleteOneInventory, updateInventory, oneInventory } from '../controllers/inventoryController.mjs';

const router = express.Router();
router.post(
    '/',
    addInventory
);
router.get(
    '/',
    allInventories
);
router.get(
    '/:id',
    oneInventory
);
router.put(
    '/update/:id',
    updateInventory
);
router.post(
    '/delete/:id',
    deleteOneInventory
);
// Rest of your code...
export default router