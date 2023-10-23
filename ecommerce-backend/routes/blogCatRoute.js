const express = require('express');
const router = express.Router();
const { createCategory, updateCategory, deleteCategory, getaCategory, getAllCategory } = require('../controller/blogCatControl');

const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')


router.post('/create-category', authMiddleware, isAdmin, createCategory)
router.put('/update-category/:id', authMiddleware, isAdmin, updateCategory)
router.delete('/delete-category/:id', authMiddleware, isAdmin, deleteCategory)
router.get('/get-category/:id', authMiddleware, isAdmin, getaCategory)
router.get('/all-category', authMiddleware, isAdmin, getAllCategory)
module.exports = router;