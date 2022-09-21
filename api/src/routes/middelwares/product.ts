import { Router } from "express";
const router = Router();

import * as productController from '../../controllers/product.controller'

router.post('/',productController.createProduct) 

router.get('/',productController.getProduct) 


router.post('/test',productController.uploadProducts) 

module.exports = router;