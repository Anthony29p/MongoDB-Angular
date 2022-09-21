const { Router } =require('express')

const product = require('./middelwares/product')

const router = Router()


router.use('/products',product)

export default router;
// module.exports = router;