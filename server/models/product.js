'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.User, {
        foreignKey: 'productId', through: models.Cart
      })
      Product.hasMany(models.Cart, {
        foreignKey: 'productId'
      })
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'name is required'
        },
        notEmpty:{
          args: true,
          msg: 'name is required'
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'imageurl is required'
        },
        notEmpty:{
          args: true,
          msg: 'imageurl is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'price is required'
        },
        notEmpty:{
          args: true,
          msg: 'price is required'
        },
        min: {
          args: [0],
          msg: 'price cannot be lower than 0'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: 'stock cannot be lower than 0'
        },
        notNull: {
          args: true,
          msg: 'stock is required'
        },
        notEmpty:{
          args: true,
          msg: 'stock is required'
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};