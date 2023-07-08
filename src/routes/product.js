const ProductRoutes = require('express').Router();
const ProductController = require('../controllers/product');

ProductRoutes.get("/", ProductController.fetchAllProducts);
ProductRoutes.get("/category/:id", ProductController.fetchProductByCategory);
ProductRoutes.post("/", ProductController.createProduct);

module.exports = ProductRoutes;