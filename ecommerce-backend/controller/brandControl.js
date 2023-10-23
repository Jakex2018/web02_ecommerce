const Category = require('../models/brandModel')
const asyncHandler = require('express-async-handler')
const { validateMongodId } = require('../utils/validateMongodId')
const createBrand = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodId(id)
    try {
        const updateCategoryItem = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateCategoryItem)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodId(id)
    try {
        const deleteCategoryItem = await Category.findByIdAndDelete(id)
        res.json(deleteCategoryItem)
    } catch (error) {
        throw new Error(error)
    }
})

const getaBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodId(id)
    try {
        const findCategory = await Category.findById(id)
        res.json(findCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBrand = asyncHandler(async (req, res) => {
    try {
        const allCategory = await Category.find(req.body)
        res.json(allCategory)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createBrand, updateBrand, deleteBrand, getaBrand, getAllBrand }