/**
 *  Property Attribute
 * 
 *  1) data property - key and value를 가지고 잇는 프로퍼티
 *  2) acceccer propery = getter and setter
 * 
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log('------------------');

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는 여부
 * 3) enumerable - 열거가 가능한지 for ... in을 사용할 수 있으면 true
 * 4) configurable -> property의 attribue의 재정의가 가능한지
 *                  false인 경우 property delete나 attribute 변경이 불가능
 *                  단, writable이 true인 경우
 *                  값 변경과 writable을 변경하는 건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log('------------------');
console.log(Object.getOwnPropertyDescriptors(yuJin));
console.log('------------------');

const yuJin2 = {
    name : '안유진',
    year: 2003,
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}

console.log(yuJin2);
console.log(yuJin2.age);
console.log('------------------');

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);
console.log('------------------');


console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'));
console.log('------------------');
// yuJin2['height'] = 172;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    value : 172,
    writable : true,
    enumerable: true,
    configurable: true,
})

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('------------------');

yuJin2.height = 180;
console.log(yuJin2);
console.log('------------------');

Object.defineProperty(yuJin2, 'height', {
    writable : false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('---------------');
//writable이 false라 값이 바뀌지않음
yuJin2.height = 170;
console.log(yuJin2);
console.log('---------------');


/**
 * Enumberable
 * false면 for 에서도 안 나오고 instance를 출력해도 안 나옴
 */

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name',{
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log('---------------');
console.log(Object.keys(yuJin2));
console.log('---------------');
for(let key in yuJin2){
    console.log(key);
}
console.log('---------------');
console.log(yuJin2);
console.log(yuJin2.name);
console.log('---------------');

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height',{
    writable : true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('---------------');


//configurable이 false이므로 변경이 불가능함

// Object.defineProperty(yuJin2, 'height',{
//     enumerable:false,
// });

Object.defineProperty(yuJin2, 'height',{
    value : 172,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('---------------');

Object.defineProperty(yuJin2, 'height',{
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// Object.defineProperty(yuJin2, 'height',{
//     writable: true,
// });