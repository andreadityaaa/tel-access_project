const { Cart, Product } = require('../models')

class CartController {
  static showAll (req, res, next) {
    Cart.findAll({
      where: {
        userId: req.decodedUser.id
      },
      order: [['id', 'ASC']],
      attributes: {
        include: ['id']
      }, include: ['Product']
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static create (req, res, next) {
    Cart.findOne({
      where: {
        productId: req.params.id,
        userId: req.decodedUser.id
      }
    })
      .then(cart => {
        if (cart) {
          return Cart.increment('quantity', {
            where: {
              productId: req.params.id,
              userId: req.decodedUser.id
            }
          })
        } else {
          return Cart.create({
            userId: req.decodedUser.id,
            productId: req.params.id
          })
        }
      })
      .then(newCart => {
        res.status(201).json(newCart)
      })
      .catch(err => {
        next(err)
      })
  }

  static update (req, res, next) {
    let id = +req.params.id
    let updated = {
        quantity: +req.body.quantity
    }
    Cart.update( updated , {
        where : {
            id : id
        }
    })
    .then(product => {
        if(product[0] === 1){
            res.status(201).json({
                message : "Cart Successfully Edited"
            })
        } else {
            res.status(404).json({
                message : 'Invalid Cart'
            })
        }
    })
    .catch(err => {
        console.log(err);
        next(err)
    })
  }

  static delete (req, res, next) {
    let id = +req.params.id

    Cart.destroy({
      where : {
        id
      }
    })
      .then(product => {
        if (product === 1) {
          res.status(201).json({
            "message" : `Cart Successfully Deleted`
          })
        } else {
          res.status(404).json({
            "message" : `Invalid Cart`
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = CartController