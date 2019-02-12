var product_controller = require('../controllers/products_controller');
var path = require('path');
module.exports = function(app) {
  app.get('/api/products', product_controller.products);
  app.post('/api/products', product_controller.new);
  app.get('/api/products/:id', product_controller.one_product);
  app.put('/api/products/:id', product_controller.product_update_id);
  app.delete('/api/products/:id', product_controller.delete_product);
  // this tells express to check angular routes
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  })
}