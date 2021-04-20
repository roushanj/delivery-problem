const calculateDiscount =  require('./module.js');
let input = JSON.parse(process.argv[2]);

input.forEach((item)=> {
   var weigth= item.weight
   var dist=item.distance
   var baseDeliveryCost=100
   var offering=item.offering
   var name=item.PKG
   
  console.log(calculateDiscount(name,baseDeliveryCost,offering,dist, weigth, 0)) // calling that function in the loop
});


