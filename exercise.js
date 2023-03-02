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
const firstName = members.map((memberName) => memberName.name.split(" ")[0]);
console.log(firstName);

// 2. Make everyone's last names in UPPERCASE in given array of objects
const lastName = members.map((memberName) =>
  memberName.name.split(" ")[1].toUpperCase()
);
console.log(lastName);

// 3. Get entries where age is between 41-60
const ages = members.filter((age) => age.age && age.age > 40 && age.age <= 60);
console.log(ages);

// 4. Get average age
let count = 0;
let totalAge = 0;
members.forEach((age) => {
  if (age.age) {
    totalAge += age.age;
    count++;
  }
});

const avgAge = totalAge / count;
console.log(avgAge);

const avg = members.reduce(
  (prev, cur) => {
    if (cur.age) {
      return { sum: prev.sum + cur.age, count: prev.count + 1 };
    }
    return prev;
  },
  { count: 0, sum: 0 }
);

console.log("avg", avg.sum / avg.count, avg);
// 5. Get Person with maximum age

const maxAge = members.reduce((pre,cur)=>{if(cur.age) return Math.max(pre, cur.age); return pre},0)
console.log(maxAge);


//
// Q-6  

// const ageGroups = members.reduce((groups, currentPerson) => {
//   if (currentPerson.age && currentPerson.age < 35) {
//     groups['young'].push(currentPerson);
//   } else if (currentPerson.age && currentPerson.age >= 35) {
//     groups['old'].push(currentPerson);
//   } else {
//     groups['noage'].push(currentPerson);
//   }
//   return groups;
// }, { young: [], old: [], noage: [] });

// console.log(ageGroups);
const ageGrp = members.reduce(
  (grp, currperson) => {
    if (currperson.age && currperson.age > 35) {
      grp["young"].push(currperson);
    } else if (currperson.age && currperson.age <= 35) {
      grp["old"].push(currperson);
    } else {
      grp["noage"].push(currperson);
    }
    return grp;
  },
  { young: [], old: [], noage: [] }
);
console.log(ageGrp);

// Q7

const newMember = { name: "ravi kumar", age: 21 };
members.splice(2, 0, newMember);
console.log(members);


// Q8
const [first, second, ...rest] = members;
console.log(first, second);
console.log(rest);

// Q9
const newmbr = { name: "kallu", age: 18 };
const newMembers = [newmbr, ...members];
console.log(newMembers);

const person = { name: "John", age: 30, city: "New York" };

const { fname, age } = person;

console.log(fname); // 'John'
console.log(age); // 30
