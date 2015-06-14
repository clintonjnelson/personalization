'use strict';

var bodyparser = require('body-parser'         );
var Product    = require('../models/Product.js');

module.exports = function(app) {
  app.use(bodyparser.json());

  // Index. Returns products array.
  app.get('/products', function(req, res) {
    Product.find({}, function(err, products) {
      if (err) {
        console.log('Error loading products. Error: ', err);
        return res.status(500).json({error: true});
      }
      res.json({products: products});
    });
  });

  // Show. Returns product object.
  app.get('/products/:id', function(req, res) {
    var productId = req.params.id;

    Product.find(productId, function(err, product) {
      if (err) {
        console.log('Error finding product id: ', productId, ". Error: ", err);
        return res.status(500).json({error: true});
      }
      res.json({product: product});
    });
  });
};
