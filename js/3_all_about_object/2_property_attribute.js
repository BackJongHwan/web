/**
 * Property Attribute
 * 
 * 1) data property - key and value를 가지고 잇는 프로퍼티
 * 2) acceccer propery = getter and setter
 * 
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는 여부
 * 3) enumerable - 열거가 가능한지
 * 4) configurable -> property의 attribue의 재정의가 가능한지
 *                  단, writable이 true인 경우
 *                  값 변경과 writable을 변경하는 건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

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

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);


console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'));
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

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    writable : false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('---------------');
yuJin2.height = 170;
console.log(yuJin2);


/**
 * Enumberable
 */

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name',{
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height',{
    writable : true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height',{
//     enumerable:false,
// });
Object.defineProperty(yuJin2, 'height',{
    value : 172,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height',{
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// Object.defineProperty(yuJin2, 'height',{
//     writable: true,
// });