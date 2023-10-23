const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect')
const cookies = require('cookie-parser')
const morgan = require('morgan')
const UserauthRouter = require('./routes/userRoute')
const ProducteuthRouter = require('./routes/productRoute')
const BlogauthRouter = require('./routes/blogRoute')
const CouponauthRouter = require('./routes/couponRoute')
const ProductCatauthRouter = require('./routes/productCatRoute')
const BlogCatauthRouter = require('./routes/blogCatRoute')
const BrandCatauthRouter = require('./routes/brandRoute')
const app = express();
app.use(cookies())
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
// Configurar las rutas de la aplicación
dbConnect();
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/user', UserauthRouter)
app.use('/api/product', ProducteuthRouter)
app.use('/api/blog', BlogauthRouter)
app.use('/api/prodcategory', ProductCatauthRouter)
app.use('/api/blogcategory', BlogCatauthRouter)
app.use('/api/brand', BrandCatauthRouter)
app.use('/api/coupon', CouponauthRouter)

///middleware
app.use(notFound)
app.use(errorHandler)
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})