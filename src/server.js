const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect("mongodb+srv://Anjalii:anjalisingh@cluster06.7snm3pu.mongodb.net/");

const UserRoutes = require('./routes/user');
app.use("/api/user", UserRoutes);

const CategoryRoutes = require('./routes/category');
app.use("/api/category", CategoryRoutes);

const ProductRoutes = require('./routes/product');
app.use("/api/product", ProductRoutes);

const CartRoutes = require('./routes/cart');
app.use("/api/cart", CartRoutes);

const OrderRoutes = require('./routes/order');
app.use("/api/order", OrderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));