const Coupon = require('../models/couponModel')
const asyncHandler = require('express-async-handler')
const { validateMongodId } = require('../utils/validateMongodId')

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body)
    res.json(newCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const updateCouponItem = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updateCouponItem)
  } catch (error) {
    throw new Error(error)
  }
})

const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const deleteCouponItem = await Coupon.findByIdAndDelete(id)
    res.json(deleteCouponItem)
  } catch (error) {
    throw new Error(error)
  }
})

const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const getCouponItem = await Coupon.findById(id)
    res.json(getCouponItem)
  } catch (error) {
    throw new Error(error)
  }
})


const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const allCouponItem = await Coupon.find()
    res.json(allCouponItem)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupon }