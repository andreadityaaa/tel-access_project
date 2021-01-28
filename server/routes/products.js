const router = require ('express').Router()
const ProductController = require ('../controllers/product')

const authentication =  require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', ProductController.showAll)
router.get('/:id', ProductController.find)
router.post('/', authorization, ProductController.create)
router.put('/:id', authorization, ProductController.edit)
router.delete('/:id', authorization, ProductController.delete)

module.exports = router