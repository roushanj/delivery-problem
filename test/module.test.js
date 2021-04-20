const calculateDiscount =  require('../module.js');
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

var name ="PKG";
var baseDeliveryCost = 100;
var offering= "off001";
var dist =20 ;
var weigth=100;

console.log(calculateDiscount(name,baseDeliveryCost,offering,dist, weigth, totalTime=0));
