const Product = require('../models/productModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (error) {
    throw new Error("Error create user")
  }
})

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const findProduct = await Product.findById(id)
    res.json(findProduct)
  } catch (error) {
    throw new Error("Error get a product")
  }
})

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    ///filtering
    const queryObj = { ...req.query }
    const excludeFields = ["page", "sort", "limit", "fields"]
    excludeFields.forEach((el) => delete queryObj[el])
    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    let query = Product.find(JSON.parse(queryStr))

    ///sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ")
      query = query.sort(sortBy)
    } else {
      query = query.sort("-createdAt")
    }

    ///Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ")
      query = query.select(fields)
    } else {
      query = query.select("-__v")
    }

    //pagination
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit
    query = query.skip(skip).limit(limit)
    if (req.query.page) {
      const productCount = await Product.countDocuments()
      if (skip >= productCount) {
        throw new Error('This page do not found')
      }
    }
    console.log(page, limit, skip)
    const product = await query
    res.json(product)
  } catch (error) {
    throw new Error(error)
  }
})

const addToWishList = asyncHandler(async (req, res) => {
  const { id } = req.user
  const { prodId } = req.body
  console.log(prodId, id)
  try {
    const user = await User.findById(id)
    const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId)
    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(id, {
        $pull: { wishlist: prodId },
      }, {
        new: true,
      },)
      res.json(user)
    } else {
      let user = await User.findByIdAndUpdate(id, {
        $push: { wishlist: prodId },
      }, {
        new: true,
      },)
      res.json(user)
    }
  } catch (error) {
    throw new Error(error)
  }
})

const rating = asyncHandler(async (req, res) => {
  const { id } = req.user
  const { star, prodId } = req.body
  try {
    const product = await Product.findById(prodId)
    let alreadyRated = product.ratings.find((userId) => userId.postedBy.toString() === id.toString())
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star },
        },
        {
          new: true,
        },
      )
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              postedBy: id,
            }
          }
        }, {
        new: true,
      }
      )
    }
    const getallRatings = await Product.findById(prodId)
    let totalRatings = getallRatings.ratings.length
    let ratingSuma = getallRatings.ratings.map((item) => item.star).reduce((prev, curr) => prev + curr, 0)
    let actualRating = Math.round(ratingSuma / totalRatings)
    let finalProduct = await Product.findByIdAndUpdate(prodId, {
      totalRating: actualRating,
    }, {
      new: true,
    },)
    res.json(finalProduct)
  } catch (error) {
    throw new Error(error)
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    const updateProductItem = await Product.findByIdAndUpdate(id, req.body, {
      title: req?.body?.title,
      slug: req?.body?.slug,
      description: req?.body?.description,
      price: req?.body?.price,
      quantity: req?.body?.quantity
    })
    res.json(updateProductItem)
  } catch (error) {
    throw new Error('Not Update a Error product ')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const deleteProductItem = await Product.findOneAndDelete(id)
    res.json(deleteProductItem)
  } catch (error) {
    throw new Error('Not Update a Error product ')
  }
})

const uploadImages = asyncHandler(async (req, res) => {
  console.log(req.files)
})

module.exports = { createProduct, getaProduct, updateProduct, getAllProduct, deleteProduct, addToWishList, rating, uploadImages }
