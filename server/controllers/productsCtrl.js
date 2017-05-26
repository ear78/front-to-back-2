var app = require('../index.js');
var db = app.get('db');

module.exports = {

    getAll: function(req,res,next){
        db.get_all_products(function(err, products){
            res.status(200).json(products);
        })
    },
    getProduct: function(req,res,next){
        db.get_product(req.params.id, function(err, product){
            res.status(200).json(product);
        })
    },
    createProduct: function(req,res,next){
        db.add_product([req.body.name,req.body.description,req.body.price,req.body.type], function(err, products){
            res.status(200).json(products);
        })
    },
    deleteProduct: function(req,res,next){
        db.delete_product(req.params.name, function(err, products){
            res.status(200).json(products);
        })
    }

}
