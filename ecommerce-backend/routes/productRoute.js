const express = require('express');
const router = express.Router();
const { createProduct, getaProduct, updateProduct, getAllProduct, deleteProduct, addToWishList, rating, uploadImages } = require('../controller/productControl');

const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImages')


router.post('/create-product', authMiddleware, isAdmin, createProduct)
router.put('/upload/:id', uploadPhoto.array('images', 10), productImgResize, uploadImages)
router.put('/add-wish', authMiddleware, addToWishList)
router.put('/rating', authMiddleware, rating)
router.get('/getaProduct/:id', getaProduct)
router.put('/update-product/:id', authMiddleware, isAdmin, updateProduct)
router.get('/all-product', getAllProduct)
router.delete('/delete-product/:id', authMiddleware, isAdmin, deleteProduct)

module.exports = router;