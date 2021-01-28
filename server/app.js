require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

const userRoutes = require('./routes/users')
const productRoutes = require('./routes/products')
const cartRoutes =  require('./routes/carts')

const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded ({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', userRoutes)
app.use('/products', productRoutes)
app.use('/carts', cartRoutes)
app.use(errorHandler)

module.exports = app