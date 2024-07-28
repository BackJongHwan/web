/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);
console.log(original === clone);

clone +=' 안유진 입니다.';
console.log('------------');
console.log(original);
console.log(clone);
console.log(original === clone);

let originalObj ={
    name:'안유진',
    group : 'ive',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('--------------');
originalObj['group'] = 'codefactory';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name : '최지호',
    group : 'codefactory',
}
clonelObj = {
    name : '최지호',
    group : 'codefactory',
}
console.log(originalObj === cloneObj);
console.log('---------------');
const yuJin1 ={
    name:'안유진',
    group: 'ive',
}
const yuJin2 = yuJin1;
const yuJin3 ={
    name:'안유진',
    group: 'ive',
}

console.log(yuJin1 === yuJin2);//true
console.log(yuJin1 === yuJin3);//false
console.log(yuJin3 === yuJin2);//false

/**
 * Spread Operator
 * copy by value
 */

const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name : 'codefactory',
    ...yuJin3,
};
console.log(yuJin6);
const yuJin7 = {
    ...yuJin3,
    name : 'codefactory',
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const number2 = [
    10, 
    ...numbers,
    // 10,
];
console.log(number2);
