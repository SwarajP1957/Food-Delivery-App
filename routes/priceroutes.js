import express from 'express';
import { createItem, createOrganization, createPricing, getAllPricing } from '../controller/pricecontroller.js';

const router = express.Router();

// Route to handle POST requests to create a new pricing entry
router.post('/createPricing', createPricing);
router.post('/createItem',createItem)
router.post('/createOrganization',createOrganization)
router.get('/getAllPricing',getAllPricing)

// Route to handle GET requests to fetch all pricing entries

export default router;
