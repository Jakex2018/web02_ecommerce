const express = require('express');
const router = express.Router();
const { createBrand, updateBrand, deleteBrand, getaBrand, getAllBrand } = require('../controller/brandControl');

const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')


router.post('/create-brand', authMiddleware, isAdmin, createBrand)
router.put('/update-brand/:id', authMiddleware, isAdmin, updateBrand)
router.delete('/delete-brand/:id', authMiddleware, isAdmin, deleteBrand)
router.get('/get-brand/:id', authMiddleware, isAdmin, getaBrand)
router.get('/all-brand', authMiddleware, isAdmin, getAllBrand)
module.exports = router;