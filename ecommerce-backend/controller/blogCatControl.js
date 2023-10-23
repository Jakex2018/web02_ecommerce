const Category = require('../models/blogCatModel')
const asyncHandler = require('express-async-handler')

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateCategory = asyncHandler(async (req, res) => {
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

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodId(id)
    try {
        const deleteCategoryItem = await Category.findByIdAndDelete(id)
        res.json(deleteCategoryItem)
    } catch (error) {
        throw new Error(error)
    }
})

const getaCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodId(id)
    try {
        const findCategory = await Category.findById(id)
        res.json(findCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllCategory = asyncHandler(async (req, res) => {
    try {
        const allCategory = await Category.find(req.body)
        res.json(allCategory)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createCategory, updateCategory, deleteCategory, getaCategory, getAllCategory }