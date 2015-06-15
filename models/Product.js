'use strict';
// Temporary product searching tool to mimic database management system

var fs = require('fs');

function returnSingleProduct(searchParam, results, callback) {
  // Find product by searchParam
  var product = results.filter(function(productObj) {
    return productObj.style_id === searchParam;
  });

  if (product.length === 0) {  // error if product not found or multiple
    console.log('Error finding product. Single product search returned ', product.length, ' items.');
    return callback("Could not find product.", null);
  }

  callback(null, product[0]);  // return matching product
}

module.exports = {
  find: function find(searchParam, callback) {

    // Load Database
    fs.readFile('./db/Database.json', 'utf-8', function(err, data) {
      var results;
      if (err) {
        console.log('Error occurred reading file. Error: ', err);
        return callback(err, null);
      }

      // Parse data if exists
      results = data && JSON.parse(data.trim());

      // {} is a request for all products
      if (results && typeof searchParam === 'object') {
        return callback(null, results);
      }
      // style_id string is a request for one product
      if (results && typeof searchParam === 'string') {
        return returnSingleProduct(searchParam, results, callback);
      }
      // invalid searchParam
      callback("Product query not valid type.", null); //
    });
  }
};
