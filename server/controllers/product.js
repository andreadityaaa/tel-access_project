const { Product } = require('../models')

class ProductController {
    static create (req, res, next) {
        const { name, imageUrl, price, stock } = req.body
        Product.create({
            name,
            imageUrl,
            price,
            stock
        })
        .then(product => {
            res.status(201).json({
                id: product.id,
                name: product.name,
                imageUrl: product.imageUrl,
                price: product.price,
                stock: product.stock
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static showAll (req, res) {
        Product.findAll({
            order: [['id', 'ASC']]
        })
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static find (req, res, next) {
        const id = req.params.id
        Product.findByPk(id)
        .then(product => {
            if (!product) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            } else {
                res.status(200).json({ product })
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static edit (req, res, next) {
        const { name, imageUrl, price, stock } = req.body
        const optionId = req.params.id

        Product.update({
            name,
            imageUrl,
            price,
            stock
        }, {
            where: { id : optionId },
            returning : true
        })
        .then(product => {
            if (product[0] === 0) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(200).json(product[1][0])
        })
        .catch(err => {
            next(err)
        })
    }

    static delete (req, res) {
        const optionId = req.params.id
        Product.destroy({
            where : {id : optionId}
        })
        .then(product => {
            if (!product) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(200).json({ "message" : `Product Successfully Deleted` })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ProductController