
const offers = {
        "off001": {
                "distance": [200, 0],
                "weigh": [200, 70],
                "disc": 10
        },
        "off002": {
                "distance": [150, 50],
                "weigh": [250, 100],
                "disc": 7
        },
        "off003": {
                "distance": [250, 50],
                "weigh": [150, 10],
                "disc": 5
        },
        "off004": {
                "distance": [10, 5],
                "weigh": [50, 10],
                "disc": 2
        }
};


function DeliveredPKG (name, discount, total, totalTime=0) {  // Returning Value
  this.name=name,
  this.discount=discount,
  this.totalCost=total,
  
  this.totalTime = totalTime
}

function isApplicable(n, a, b) { // To check wheather offer will be applicable or not
   return (n - a) * (n - b) <= 0
}

function calculateDiscount(name,baseDeliveryCost,offering,dist, weigth, totalTime=0){
  var discount = 0;
  var deliveryCost = 0;
  var cost=0;
  var discountedValue=0;

  var keys = Object.keys(offers);

  keys.forEach((key)=> { // Looping through offers if offer matchs from input
        if(key == offering){
                if(isApplicable(dist, offers[key].distance[0], offers[key].distance[1]) && isApplicable(weigth, offers[key].weigh[0], offers[key].weigh[1])){
                        discount = offers[key].disc
                } // if offer is applicable then give discount
        }
  });

  deliveryCost = baseDeliveryCost +(weigth*10)+(dist*5);
  discountedValue = deliveryCost*discount/100
  cost = deliveryCost - discountedValue;
  if(totalTime === 0 ) return new DeliveredPKG(name, discountedValue, cost)
  return new DeliveredPKG(name, discountedValue, cost, totalTime)
}


module.exports = calculateDiscount 
