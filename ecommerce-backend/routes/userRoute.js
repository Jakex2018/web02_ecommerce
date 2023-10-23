const express = require('express');
const router = express.Router();
const { createUser, loginUserControl, getUser, singleUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAddress, useCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrders } = require('../controller/userControl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


router.post('/register', createUser)
router.post('/login', loginUserControl)
router.post('/admin-login', loginAdmin)
router.post('/cart/add-cart', authMiddleware, useCart)
router.get('/cart/all-cart', authMiddleware, getUserCart)
router.post('/create-order', authMiddleware, createOrder)
router.get('/all-user', getUser)
router.get('/all-order', authMiddleware, getOrders)
router.get('/wishlist', authMiddleware, getWishList)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put('/password', authMiddleware, updatePassword)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logoutUser)
router.get('/:id', authMiddleware, isAdmin, singleUser)
router.delete('/delete/:id', deleteUser)
router.delete('/cart/delete-cart', authMiddleware, emptyCart)
router.put('/update-order/:id', authMiddleware, isAdmin, updateOrders)
router.post('/cart/apply-coupon', authMiddleware, applyCoupon)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/update/:id', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)

module.exports = router;