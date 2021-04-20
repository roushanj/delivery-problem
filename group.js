let groupArr = [];

function groupPackage(input, maxWeight){
var largest=0;
input.forEach(item=>{
   if (item.weight>largest) {
        largest=item.weight;
    }

});

//console.log(largest)
if(largest > maxWeight) return "Maximum weight is lesser than PKG weight";

 while(input.length>0){
    let x=0, y=0, total=0;
    let pArr = [];
    while(y<input.length){
      if((total+input[y].weight)> maxWeight){
        if((total+input[y].weight-input[x].weight) < maxWeight){
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
  return groupArr;
}

module.exports = groupPackage
