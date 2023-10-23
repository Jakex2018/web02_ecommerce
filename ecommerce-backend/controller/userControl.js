const User = require('../models/userModel')
const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
const Coupon = require('../models/couponModel')
const Order = require('../models/orderModel')
const asyncHandler = require('express-async-handler')
const { generateToken } = require('../config/jwtToken')
const { validateMongodId } = require('../utils/validateMongodId')
const { generateRefreshToken } = require('../config/refreshToken')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const uniqid = require('uniqid');
const { sendEmail } = require('../controller/emailControl')
//Register Use
const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body
  const findUser = await User.findOne({ email: email })
  if (!findUser) {
    //Create User
    const newUser = await User.create(req.body)
    res.json(newUser)
  } else {
    // Already exist
    throw new Error("User already Exists")
  }
})

//Login User
const loginUserControl = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  //check user exists
  const findUser = await User.findOne({ email })
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id)
    const updateUser = await User.findByIdAndUpdate(findUser.id, {
      refreshToken: refreshToken,
    }, {
      new: true
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })
    res.json(
      {
        _id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
      }
    )
  } else {
    throw new Error('Invalid Credentials')
  }
})

//Login Admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  //check user exists
  const findAdmin = await User.findOne({ email })
  if (findAdmin.role !== 'admin') {
    throw new Error('is not admin')
  } else {
    res.json(`Welcome admin ${findAdmin.firstname}`)
  }
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id)
    const updateUser = await User.findByIdAndUpdate(findAdmin.id, {
      refreshToken: refreshToken,
    }, {
      new: true
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })
    res.json(
      {
        _id: findUser?._id,
        firstname: findAdmin?.firstname,
        lastname: findUser?.lastname,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        token: generateToken(findAdmin?._id),
      }
    )
  } else {
    throw new Error('Invalid Credentials')
  }
})

//handle refresh Token
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies
  if (!cookie?.refreshToken) {
    throw new Error('No refresh Token in Cookies')
  }
  const refreshToken = cookie.refreshToken
  const user = await User.findOne({ refreshToken })
  if (!user) {
    throw new Error("No refresh token present in db or not matched")
  }
  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error('There is somethin wrong with refresh token')
    }
    const accessToken = generateToken(user?._id)
    res.json({ accessToken })
  }
  )
})
//logout funcionality
const logoutUser = asyncHandler(async (req, res) => {
  const cookie = req.cookies
  if (!cookie?.refreshToken) {
    throw new Error('No refresh token in Cookies')
  }
  const refreshToken = cookie.refreshToken
  const user = await User.findOne({ refreshToken })
  if (!user) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
    })
    return res.sendStatus(204) ///errorHandler
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: '',
  })
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
  })
  res.sendStatus(204) ///errorHandler
})

//Get All User
const getUser = asyncHandler(async (req, res) => {
  try {
    const allUser = await User.find()
    res.json(allUser)
  } catch (err) {
    throw new Error(err)
  }
})

// Get only users
const singleUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const single = await User.findById(id)
    res.json({
      single,
    })
  } catch (error) {
    throw new Error(error)
  }
})

//Delete a User
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const deleteUserItem = await User.findByIdAndDelete(id)
    res.json({
      deleteUserItem
    })
  } catch (err) {
    throw new Error(err)
  }
})

//Update a User
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongodId(id)
    const updateUserItem = await User.findByIdAndUpdate(id, {
      firstname: req?.body?.firstname,
      lastname: req?.body?.lastname,
      email: req?.body?.email,
      mobile: req?.body?.mobile,
      password: req?.body?.password
    }, {
      new: true,
    })
    res.json(updateUserItem)
  } catch (err) {
    throw new Error(err)
  }
})

//Block a User
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const blockUserItem = await User.findByIdAndUpdate(id, {
      isBlocked: true,
    }, {
      new: true,
    },)
    res.json({
      blockUserItem
    })
  } catch (erro) {
    throw new Error('User not Block')
  }
})
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodId(id)
  try {
    const unblockUserItem = await User.findByIdAndUpdate(id, {
      isBlocked: false,
    }, {
      new: false,
    },)
    res.json({
      unblockUserItem,
      message: 'User unblock'
    })
  } catch (error) {
    throw new Error('User not unblocked')
  }
})

//update Password
const updatePassword = asyncHandler(async (req, res) => {
  const { id } = req.user
  const { password } = req.body
  validateMongodId(id)
  const user = await User.findById(id)
  if (password) {
    user.password = password
    const updatePass = await user.save()
    res.json(updatePass)
  } else {
    res.json(user)
  }
})

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Not found a User')
  }

  try {
    const token = await user.createPasswordResetToken()
    await user.save()
    const resetURL = `hi, please follow now. <a href='localhost:4000/api/user/reset-password/${token}'>Click here</a>`
    const data = {
      to: email,
      text: "hey user",
      subject: "forgot password",
      html: resetURL,
    }
    console.log(resetURL)
    sendEmail(data)
    res.json(token)
  } catch (error) {
    throw new Error(error)
  }

})

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body
  const { token } = req.params
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  })
  if (!user) {
    throw new Error('Token expired')
  }
  user.password = password
  user.passwordResetToken = undefined
  user.passwordResetExpires = undefined
  await user.save()
  res.json(user)
})

const getWishList = asyncHandler(async (req, res) => {
  const { id } = req.user
  try {
    const user = await User.findById(id).populate("wishlist")
    res.json(user)
  } catch (error) {
    throw new Error(error)
  }
})

//save user adress
const saveAddress = asyncHandler(async (req, res, next) => {
  const { id } = req.user
  validateMongodId(id)
  try {
    const updateUserItem = await User.findByIdAndUpdate(id, {
      address: req?.body?.address,
    }, {
      new: true,
    })
    res.json(updateUserItem)
  } catch (err) {
    throw new Error(err)
  }
})

const useCart = asyncHandler(async (req, res) => {
  const { cart } = req.body
  const { id } = req.user
  validateMongodId(id)
  try {
    let products = []
    const user = await User.findById(id)
    //already add product
    const alreadyAdded = await Cart.findOne({ orderBy: user.id })
    if (alreadyAdded) {
      alreadyAdded.remove()
    }

    for (let i = 0; i < cart.length; i++) {
      let object = {}
      object.product = cart[i].id
      object.count = cart[i].count
      object.color = cart[i].color
      const getPrice = await Product.findById(cart[i].id).select('price').exec()
      object.price = getPrice.price
      products.push(object)
    }
    let cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderBy: user?.id
    }).save()
    res.json(newCart)
  } catch (error) {
    throw new Error(error)
  }
})

const getUserCart = asyncHandler(async (req, res) => {
  const { id } = req.user
  validateMongodId(id)
  try {
    const cart = await Cart.findOne({ orderBy: id }).populate(
      "products.product"
    )
    res.json(cart)
  } catch (error) {
    throw new Error(error)
  }

})
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user
  validateMongodId(_id)
  try {
    const user = await User.findOne({ _id })
    const cart = await Cart.findOneAndRemove({ orderBy: user._id })
    res.json(cart)
  } catch (error) {
    throw new Error(error)
  }
})

const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body
  const { _id } = req.user
  validateMongodId(_id)
  try {
    const validateCoupon = await Coupon.findOne({ name: coupon })
    if (validateCoupon === null) {
      throw new Error("Invalide Coupon")
    }
    const user = await User.findOne({ _id })

    let { cartTotal } = await Cart.findOne({ orderBy: user._id }).populate("products.product")

    let totalAfterDiscount = (
      cartTotal - (cartTotal * validateCoupon.discount) / 100
    ).toFixed(2)

    await Cart.findOneAndUpdate(
      { orderBy: user._id },
      { totalAfterDiscount }, {
      new: true
    }
    )
    res.json(totalAfterDiscount)
  } catch (error) {
    throw new Error(error)
  }
})

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body
  const { id } = req.user
  validateMongodId(id)
  try {
    if (!COD) {
      throw new Error("Error to create a Order")
    }
    const user = await User.findById(id)
    let useCart = await Cart.findOne({ orderBy: user.id })
    let finalAmount = 0
    if (couponApplied && useCart.totalAfterDiscount) {
      finalAmount = useCart.totalAfterDiscount
    } else {
      finalAmount = useCart.cartTotal
    }

    let newOrder = await new Order({
      products: useCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash on delivery",
        created: Date.now(),
        currency: "usd"
      },
      orderStatus: "Cash on delivery",
      orderBy: user.id,
    }).save()

    let update = useCart.modifiedPaths((item) => {
      return {
        updateOne: {
          filter: { id: item.product.id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        }
      }
    })
    const updated = await Product.bulkWrite(update, {})
    res.json("message:success")
  } catch (error) {
    throw new Error(error)
  }
})

const getOrders = asyncHandler(async (req, res) => {
  const { id } = req.user
  validateMongodId(id)
  try {
    const userOrders = await Order.findOne({ orderBy: id }).populate("products.product").exec()
    res.json(userOrders)
  } catch (error) {
    throw new Error(error)
  }
})

const updateOrders = asyncHandler(async (req, res) => {
  const { status } = req.body
  const { id } = req.params
  validateMongodId(id)

  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(id, {
      orderStatus: status,
      paymentIntent: {
        status: status,
      }
    }, {
      new: true
    })
    res.json(updateOrderStatus)
  } catch (error) {
    throw new Error(error)
  }
})
module.exports = { createUser, loginUserControl, getUser, singleUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAddress, useCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrders }