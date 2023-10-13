const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
console.log(randomCar)
console.log(otherRandomCar)
// predicted 'tesla' 'mercades'



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
// predited name = undefined, elon
// outcome name is not defined


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);
// 12345, undefined



const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
console.log(first == second);
console.log(first == third);
// false, true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
    //key = value
const { secondKey } = lastTest;
    //
const [, willThisWork] = secondKey;
        // 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// predicted 'value', 5, 1, 5
// outcome 'value', [1,5,1,8,3,3] , 1, 5
