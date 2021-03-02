//orders.test.js
//Author: Joshua Henderson
//Date: 01 March 2021
//This is the unit test file that will make sure there is a file for the orders json.

 
const orderFile = require("../routes/orders");

test('test orderFile', () => {
 
   //this test will make sure that there is actually an orders file 
    expect(orderFile).toEqual(expect.anything());

});
