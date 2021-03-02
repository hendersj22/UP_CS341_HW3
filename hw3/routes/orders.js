//orders.js
//Author: Joshua Henderson
//Date: 01 March 2021
//This is the file that makes the json file that can be displayed when going to the localhost:3000/orders link. 

var express = require('express');
var router = express.Router();

var arrayOrders = { 
    "data": [
         { 
            "topping" : "cherry",
            "quantity": 24 
        }, 
        { 
            "topping": "plain", 
            "quantity": 571
        },  
        { 
            "topping": "chocolate",
            "quantity": 46 
        }
    ]
};

/* Get new orders listing. */
router.get('/', function(req, res, next) {
  res.send(arrayOrders);
});

//will do the posts for each month buttons
router.post('/',function(req,res){
    var cherryData = (arrayOrders.data[0].quantity + " " + arrayOrders.data[0].topping);
    var plainData = (arrayOrders.data[1].quantity + " " + arrayOrders.data[1].topping);
    var chocolateData = (arrayOrders.data[2].quantity + " " + arrayOrders.data[2].topping);
    res.send({cherry: cherryData, plain: plainData, chocolate: chocolateData }); 
});

module.exports = router;


