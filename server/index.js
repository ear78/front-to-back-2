var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();

var db = massive.connectSync({
    db: "fronttoback2"
});

app.set('db', db);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../public"));



// GET ALL PRODUCTS
app.get('/products', function(req,res,next){
    db.get_all_products(function(err, products){
        res.status(200).json(products);
    });
});

app.get('/products/:id', function(req,res,next){
    db.get_product(req.params.id, function(err, product){
        res.status(200).json(product);
    })
})

app.post('/products', function(req,res,next){

})

app.put('/products/:product', function(req,res,next){

})

app.delete('/products/:product', function(req,res,next){

})



// SERVER IS ON 9999
app.listen(9999, function(){
    console.log("listening on 9999");
});
