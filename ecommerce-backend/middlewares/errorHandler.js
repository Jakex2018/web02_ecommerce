//Not found
const notFound = (req, res, next) => {
  const error = new Error(`Not found : ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// Error Handler
const errorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode == 200 ? res.statuscode : 500
  res.status(statuscode)
  res.json({
    message: err?.message + '',
    stack: err?.stack + ''
  })
}
module.exports = { errorHandler, notFound }