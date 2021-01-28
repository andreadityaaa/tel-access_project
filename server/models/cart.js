'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Cart.belongsTo(models.Product, {
        foreignKey: 'productId'
      })
    }
  };
  Cart.init({
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [1],
          msg: 'quantity cannot be lower than 1'
        }
      }
    },
    status: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
    hooks: {
      beforeCreate (cart) {
        cart.status = 'not paid',
        cart.quantity = 1
      }
    }
  });
  return Cart;
};