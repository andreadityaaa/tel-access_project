const router = require ('express').Router()
const CartController = require ('../controllers/cart')

const authentication =  require('../middlewares/authentication')
const customerAuthorization = require('../middlewares/customerAuthorization')

router.use(authentication)
router.get('/', CartController.showAll)
router.post('/:id', CartController.create)
router.put('/:id', CartController.update)
router.delete('/:id', CartController.delete)

module.exports = router