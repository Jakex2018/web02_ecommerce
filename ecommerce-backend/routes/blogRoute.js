const express = require('express');
const router = express.Router();
const { createBlog, updateBlog, getaBlog, getallBlog, deleteaBlog, likeBlog, dislikeBlog } = require('../controller/blogControl');

const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')


router.post('/create-blog', authMiddleware, isAdmin, createBlog)
router.put('/update-blog/:id', authMiddleware, isAdmin, updateBlog)
router.put('/likes', authMiddleware, likeBlog)
router.put('/dislikes', authMiddleware, dislikeBlog)
router.get('/get-blog/:id', getaBlog)
router.get('/all-blog', getallBlog)
router.get('/delete-blog/:id', isAdmin, authMiddleware, deleteaBlog)
module.exports = router;