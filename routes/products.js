var express = require('express');
var router = express.Router();
var productsController = require('../controllers/product');
router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
module.exports = router;
