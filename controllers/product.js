const Product = require('../models/product');
const getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
const createProduct = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(' product added successfully');
    }
  });
};
module.exports = { getProducts, createProduct };
