//
//Object destructuring
//

// const person = {
//     name:'Andrew',
//     age: 26,
//     location:{
//         city:'Cairo',
//         temp:92
//     }
// };
// const {name,age}=person;
// console.log(`${name} is ${age}.`);

// console.log(`It's ${person.location.temp} in ${person.location.city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name:publisherName='Self-published'}=book.publisher;

// console.log(publisherName);

//
//Array destructuring
//


// const address=['1 Emtedad Waly Alahd', 'Hadayek' ,'Cairo','11755'];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}`);



const item = ['Coffee (hot)','$2.00','$2.50','2.75'];

const [type,sP,mP,lP]=item;

console.log(`A medium ${type} costs ${mP}`);