var process = 'ff'
if(process) {
    console.log('dggdkf')
}
function baseFun (age:number) {
    return 'Lily' + age
}
console.log(baseFun(18))

// interface Person{
//     readonly name:string;
//     age?:number;
// }

// function describtation(people:Person) {
//     console.log(people.name+"今年"+people.age+"岁")
// }
// var user:Person={name:'ll'}
// describtation(user)
// /**添加只读属性后，不可被修改 */
// // user.name='dfd'
// describtation(user)

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + "f " + person.lastName;
}

const user = new Student("Jane", "M.", 12);
console.log(user)
console.log(greeter(user));

switch ('1') {
    case '1':
    console.log('111');
    case '2':
    console.log('22');
}