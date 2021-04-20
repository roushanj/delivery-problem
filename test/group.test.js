const groupPackage = require('../group.js');
let maxWeight = 100;

let input=[{"PKG":"2", "weight":75,"distance": 125,"offering":"off002"},
{"PKG":"3", "weight":15,"distance": 100,"offering":"off003"},
{"PKG":"4", "weight":10,"distance": 60, "offering":"off003"},
{"PKG":"5", "weight":155,"distance": 95, "offering":"off002"}];

console.log(groupPackage(input,maxWeight))
