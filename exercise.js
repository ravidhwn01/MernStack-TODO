const members = [
  { name: "Vijay Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone
const firstName = members.map(memberName =>memberName.name.split(' ')[0])
console.log(firstName);

// 2. Make everyone's last names in UPPERCASE in given array of objects
const lastName = members.map(memberName =>memberName.name.split(' ')[1].toUpperCase())
console.log(lastName);

// 3. Get entries where age is between 41-60
const ages = members.filter(age => age.age&&age.age>40&&age.age<=60)
console.log(ages);

// 4. Get average age
let count = 0;
let totalAge = 0;
const avgages =  members.forEach((age) => {
   return age.age
    // if(age.age){
    //     totalAge += age.age;
    //     count++;
    // }
})
console.log(avgages);
// const avgAge = totalAge / count;
// console.log(avgAge);



// 5. Get Person with maximum age


