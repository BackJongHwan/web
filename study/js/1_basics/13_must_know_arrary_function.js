/**
 * Function Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

//push()
console.log(iveMembers.push('codefactory'));
console.log(iveMembers);
console.log('--------------');
//pop()
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('--------------');
//shift()
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('--------------');
//unshift()
console.log(iveMembers.unshift('yuJin'));
console.log(iveMembers);
console.log('--------------');
//splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('--------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);
//concat() -> new array 
console.log(iveMembers.concat('codefactory'));
console.log(iveMembers);
console.log('--------------');

//slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);
console.log('--------------');

//spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);
console.log('--------------');
let iveMembers3 = [
    iveMembers,
]
console.log(iveMembers3);
console.log('--------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);

console.log('--------------');

//join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

//sort()
//오름차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
]
console.log(numbers);
//a, b compare
// 1) b -> a return > 0
// 2) a -> b return < 0
// 3) original return 0
numbers.sort((a, b) =>{
    return a > b ? 1 : - 1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

//map()
console.log(iveMembers.map(x => x ));
console.log(iveMembers.map(x => `아이브: ${x}` ));

console.log(iveMembers.map(x => {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    }else{
        return x;
    }
}))
console.log(iveMembers);

//filter()
numbers =[1, 8, 7, 6, 3];
console.log(numbers.filter(x => true));
console.log(numbers.filter(x => false));
console.log(numbers.filter(x => x % 2 === 0));

//find()
console.log(numbers.find(x => x % 2 === 0));

//findindex()
console.log(numbers.findIndex(x => x % 2 === 0));


//reduce()
console.log(numbers.reduce((p, n) => p + n, 0));