const calculateDiscount =  require('./module.js');
const groupPackage = require('./group.js');

let input = JSON.parse(process.argv[5]);

let nVehicle = parseInt(process.argv[2]);
let vSpeed = parseInt(process.argv[3]);;
let maxWeight = parseInt(process.argv[4]);;

let vArr = []; // Creating Vehicle Array

for(let i=0;i<nVehicle;i++){
  vArr.push(0);
}


let groupArr = [];


groupArr = groupPackage(input, maxWeight); // Calling Grouping Function to Group the PKG according to condition of weight less than xkg
if(typeof(groupArr) == 'string') { // Error Handling
    console.log(groupArr)
}else{
groupArr.sort(function(a, b){ // Sort the Array
  if(a.length==b.length){
    let x=0, y=0;
    a.forEach(p =>{
      x+=p.weight;
    })
    b.forEach(p=>{
      y+=p.weight;
    })
    return y-x;
  }
  return b.length-a.length;
});

let finalAns = []; // Return Value

function max(a, b){ // To find Max Value
  if(a>b) return a;
  else return b;
}

groupArr.forEach(group => { // Assigning the PKG to vehicle 
  let maxTime = 0;
  let vTime = vArr[0];
  vArr.splice(0,1);
  group.forEach(pack => {
    pDeliveryTime = pack.distance/vSpeed;
    pack.totalTime = vTime+pDeliveryTime;
    maxTime = max(maxTime, pDeliveryTime);
    finalAns.push(pack);
  })
  vTime = vTime+(2*maxTime);
  vArr.push(vTime);
  vArr.sort();
});

finalAns.forEach(item =>{ // adding Discount to the PKG
 var name = item.PKG;
 var offering = item.offering;
 var dist = item.distance;
 var weigth = item.weight;
 var totalTime = item.totalTime;
 var baseDeliveryCost = 100;
 console.log(calculateDiscount(name,baseDeliveryCost,offering,dist, weigth, totalTime))
});
}
