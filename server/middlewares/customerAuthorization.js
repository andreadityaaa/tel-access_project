const { Cart } = require('../models')

function CustomerAuthorization(req, res, next) {
  Cart.findOne({
    where: {
      UserId: req.decodedUser.id
    }
  })
    .then(cart => {
      if (cart) {
        req.decodedUser.id = cart.id
        next()
      } else {
        throw {
          name: 'Unauthorized User'
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = CustomerAuthorization 