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
var productsCtrl = require('./controllers/productsCtrl.js');

app.use(bodyParser.json());
app.use(express.static("../public"));



//get all products
app.get('/products', productsCtrl.getAll);

// find a particular product based on id
app.get('/products/:id', productsCtrl.getProduct);

// create product inventory
app.post('/products', productsCtrl.createProduct);

// delete specific product inventory
app.delete('/products/:name', productsCtrl.deleteProduct);



// SERVER IS ON 9999
app.listen(9999, function(){
    console.log("listening on 9999");
});
