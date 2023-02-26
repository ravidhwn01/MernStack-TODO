//object
'use strict';
const car = {
    carName :"rolls royce",
    model:"Ghost",
    fuelType :"petrol",
    color:"blue",
    price: 500000000

}

console.log(car.price);
console.log(car.color);

car.color = "black"
console.log(car.color);
console.log(car);


// arrays

const cars = [null];
console.log(cars);
console.log(cars[1]);


var undef = null;
console.log(undef);
undef = "this is not null"
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// array operations

const users  = [
    {name:'ravi',
age:21,
favcolor:'red'},
    {name:'raju',
age:23,
favcolor:'black'},
    {name:'kalu',
age:31,
favcolor:'blue'},
]

console.log(users);
// const usu = users.map(us =>
//     us.age = 12)
//     console.log(users);
//     console.log(usu);


console.log(users.filter(us => us.favcolor)
); 


const arr = users.map(us => us.favcolor = "yellow")
console.log(users);