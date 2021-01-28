const { User } = require('../models')

function authorization(req, res, next) {
  User.findOne({
    where: { 
      id: req.decodedUser.id
    } 
  })
    .then(user => {
      if (!user) {
        throw {
          name: 'Unauthorized User'
        }  
      } else {
        if (user.role === 'admin') {
            next()
        } else {
          throw {
            name: 'Unauthorized User'
          }   
        }
      }
  })
    .catch((err) => {
      res.status(401).json({ message: "Unauthorized User" });
  })
}

module.exports = authorization;