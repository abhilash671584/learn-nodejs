const person = {
    ename: 'Abp',
    age: 30,
    designation: 'Engineer'
}
//Object destructuring
const {ename, age} = person;
console.log(ename + age);

//array destructuring
const names = ['Abhilash','Shravani'];
let [name1, name2] = names;
console.log(name1, name2)
