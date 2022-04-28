// Code your solution here

const { arrayContaining } = require("expect")

// describe('findMatching()', function () {
//     it('returns all drivers that match the passed in name', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//       expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
//       expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
//     });

//     it('returns matching drivers if case does not match but letters do', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

//       expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);
//     });

//     it('returns an empty array if there is no match', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

//       expect(findMatching(drivers, 'Susan')).to.eql([]);
//     });
//   });


// function findMatching(array, name){
//     const newArray = []
//     for (element of array){
//         if(callback(element)){
//             console.log(array.name)
//             newArray.push(name)
//         }
//     }
//     return newArray;
// }

// filter(drivers, function(findMatching){
//     return findMatching;
// });


// function filter(collection, cb) {
//     for (const user of collection) {
//       if (cb(user)) {
//         console.log(user.firstName);
//       }
//     }
//   }

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(array, str){
//     const newArray = []
//     for(const element of array){
//         if(element.toLowerCase() === str.toLowerCase()){
//         newArray.push(element)
//     }
// }
//     console.log(newArray)    
//     return newArray;
// };

// findMatching(drivers, "Bobby");

// function fuzzyMatch(array, str){
//     const newArray = []
//     let firstLetter = str.charAt(0);
//     for(const element of array){
//         if(element.charAt(0) === firstLetter){
//             newArray.push(element);
//         }
//     }
//     console.log(newArray)
//     return newArray
// }

// fuzzyMatch(drivers, "Susan");



// // const matchingDrivers = drivers.filter(({name}) => name === str);
// // console.log(matchingDrivers);

// function matchName(array, str){
//     const matchingDrivers = array.filter(({name}) => name === str);
//     console.log(matchingDrivers);
//     return matchingDrivers;
// }

// matchName(drivers, "Bobby");


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(array, str){
    return array.filter(
        (element) => (str.toLowerCase() === element.toLowerCase())
)};

// findMatching(drivers, "Bobby");



function fuzzyMatch(array, str){
    return array.filter(
        (element) => (element.charAt(0) === str.charAt(0))
    )
};

// console.log(fuzzyMatch(drivers, "Susan"));



function matchName(array, str){
    return array.filter((element) => element.name === str);
}

console.log(matchName(drivers, "Bobby"));