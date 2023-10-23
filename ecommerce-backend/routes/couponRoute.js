const express = require('express');
const router = express.Router();
const { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupon } = require('../controller/couponControl');

const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')


router.post('/create-coupon', authMiddleware, createCoupon)
router.put('/update-brand/:id', authMiddleware, isAdmin, updateCoupon)
router.delete('/delete-brand/:id', authMiddleware, isAdmin, deleteCoupon)
router.get('/get-brand/:id', authMiddleware, isAdmin, getCoupon)
router.get('/all-brand', authMiddleware, isAdmin, getAllCoupon)
module.exports = router;
