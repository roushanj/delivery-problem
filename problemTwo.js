const calculateDiscount =  require('./module.js');
let input = JSON.parse(process.argv[5]);

let nVehicle = parseInt(process.argv[2]);
let vSpeed = parseInt(process.argv[3]);;
let maxWeight = parseInt(process.argv[4]);;

let vArr = [];

for(let i=0;i<nVehicle;i++){
  vArr.push(0);
}


let groupArr = [];

function groupPackage(input){
  while(input.length>0){
    let x=0, y=0, total=0;
    let pArr = [];
    while(y<input.length){
      if((total+input[y].weight)> maxWeight){
        if((total+input[y].weight-input[x].weight) <= maxWeight){
          total = total+input[y].weight-input[x].weight;
          x++;
          y++;
          
        }else{
          break;
        }
      }
      else{
        total = total+input[y].weight;
        y++;
      }
    }
    for(let i=x;i<y;i++){
      pArr.push(input[i]);
    }
    groupArr.push(pArr);
    input.splice(x, y-x);
  }
}

groupPackage(input);
groupArr.sort(function(a, b){
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
})

let finalAns = [];

function max(a, b){
  if(a>b) return a;
  else return b;
}

groupArr.forEach(group => {
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
})
finalAns.forEach(item =>{
 var name = item.PKG;
 var offering = item.offering;
 var dist = item.distance;
 var weigth = item.weight;
 var totalTime = item.totalTime;
 var baseDeliveryCost = 100;
 console.log(calculateDiscount(name,baseDeliveryCost,offering,dist, weigth, totalTime))
});

