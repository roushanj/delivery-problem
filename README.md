# delivery-problem

## ProblemOne

### Usage - node problemOne.js '[{"PKG":"2", "weight":75,"distance": 125,"offering":"off002"}, ...more]'


## ProblemTwo

### Usage - node problemTwo.js 'no_vehicle' 'max_speed' 'max_weight' '[{"PKG":"2", "weight":75,"distance": 125,"offering":"off002"}, ...more]'


## Description

-> Group.js --> This will return an array according to condition that states 'No PKG weight should be greater than 200 & max package should deliver at once'

-> module.js --> This will return Discounted value of packages and takes user input.

-> Offers --> Offers are present in module.js , we change the variable value there only.



## Test

### Usage - Mainly we need to test grouping & Discount function (You can add more custom test cases there )
--> node group.test.js      
--> node module.test.js  
