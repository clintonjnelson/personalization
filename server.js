'use strict';

var express = require('express');
var app     = express();

// Routers
var productRouter  = express.Router();

// Load Routers
require('./routes/products_routes.js')(app);

// Use Routes
app.use(productRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port: ', process.env.PORT || 3000);
});



