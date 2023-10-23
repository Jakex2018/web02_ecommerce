const Blog = require('../models/blogModel')
const User = require("../models/userModel")
const asyncHandler = require('express-async-handler')
const { validateMongodId } = require('../utils/validateMongodId')

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body)
    res.json(newBlog)
  } catch (error) {
    throw new Error(error)
  }
})

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const updateBlogItem = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updateBlogItem)
  } catch (error) {
    throw new Error(error)
  }
})

const getaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const findBlog = await Blog.findById(id)
    const updateViews = await Blog.findByIdAndUpdate(id, {
      $inc: { numViews: 1 },
    }, { new: true })
    res.json(updateViews)
  } catch (error) {
    throw new Error(error)
  }

})
const getallBlog = asyncHandler(async (req, res) => {
  try {
    const allUser = await Blog.find()
    res.json(allUser)
  } catch (error) {
    throw new Error(error)
  }
})

const deleteaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const deleteBlogItem = await Blog.findByIdAndDelete(id)
    res.json(deleteBlogItem)
  } catch (error) {
    throw new Error(error)
  }
})

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body
  validateMongodId(blogId)
  //find the blog
  const blog = await Blog.findById(blogId)
  //find the login user
  const loginUserId = req?.user?._id
  //find if the user has like blog
  const isLiked = blog?.isLiked
  //find if the user has dislike nlo
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  )
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true
      }
    )
    res.json(blog)
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true
      }
    )
    res.json(blog)
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true
      }
    )
    res.json(blog)
  }
})

const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body
  validateMongodId(blogId)
  //find the blog
  const blog = await Blog.findById(blogId)
  //find the login user
  const loginUserId = req?.user?._id
  //find if the user has dislike blog
  const isDisLiked = blog?.isDisliked
  //find if the user has like nlo
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  )
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true
      }
    )
    res.json(blog)
  }
  if (isDisLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true
      }
    )
    res.json(blog)
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true
      }
    )
    res.json(blog)
  }
})
module.exports = { createBlog, updateBlog, getaBlog, getallBlog, deleteaBlog, likeBlog, dislikeBlog }
