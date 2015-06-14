'use strict';

var chai     = require('chai'                 );
var chaihttp = require('chai-http'            );
var Product  = require('../models/Product.js' );
var expect   = chai.expect;
chai.use(chaihttp);

// Start server for testing
require('../server.js');

describe('Products_Routes', function() {
  describe('GET /products', function() {
    var testProducts;
    before(function(done) {
      chai.request('localhost:3000')
        .get('/products')
        .end(function(err, res) {
          expect(err).to.eq(null);
          testProducts = res.body.products;
          done();
        });
    });

    it('returns an array', function() {
      expect(Array.isArray(testProducts)).to.eq(true);
    });
    it('returns an array of more than one item', function() {
      expect(testProducts.length).to.be.at.least(1);
    });
  });


  describe('GET /products/:id', function() {
    var testProduct;
    before(function(done) {
      chai.request('localhost:3000')
        .get('/products/' + '3530925')  // style_id = 3530925
        .end(function(err, res) {
          expect(err).to.eq(null);
          testProduct = res.body.product;
          done();
        });
    });

    it('returns the product matching the passed style_id', function() {
      expect(testProduct.style_id).to.eq('3530925');
    });
    it('returns the full product', function() {
      expect(testProduct.brand                  ).to.include('Trouve' );
      expect(testProduct.formatted_regular_price).to.include('00'     );
      expect(testProduct.image_url              ).to.include('/_'     );
      expect(testProduct.name                   ).to.include('Sweater');
    });
  });
});
