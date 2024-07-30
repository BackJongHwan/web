/**
 * Immutable Object
 */
const yuJin = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);
console.log('---------------');
/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin));
yuJin['position'] = 'vocal';
console.log(yuJin);
console.log('---------------');

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
console.log('---------------');

//추가는 안 됨
yuJin['groupName'] = 'ive';
console.log(yuJin);
console.log('---------------');

//삭제는 됨
delete yuJin['position'];
console.log(yuJin);
console.log('---------------');

/**
 * Seal
 */
const yuJin2 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));
console.log('---------------');

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));
console.log('---------------');
//추가 안 됨
yuJin2['groupName'] = 'ive';
console.log(yuJin2);
console.log('---------------');
//삭제도 안 됨
delete yuJin2['name'];
console.log(yuJin2);
console.log('---------------');

//이거는 또 가능한건가?? -> 가능함
//configurable을 false로 바꾸는 것과 같음 + 값 추가 삭제 불가능
Object.defineProperty(yuJin2, 'name', {
    value:'codefactory',
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

Object.defineProperty(yuJin2, 'name', {
    writable : false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));


/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다
 */

const yuJin3 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));
console.log('-----------------');

yuJin3['groupName'] = 'ive';
console.log(yuJin3);
console.log('-----------------');


delete yuJin3['name'];
console.log(yuJin3);
console.log('-----------------');

//그냥 불가능

// Object.defineProperty(yuJin3, 'name', {
//     value : 'codefactory',
// })

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
console.log('-----------------');

const yuJin4 = {
    name: '안유진',
    year : 2003,
    wonYoung:{
        name : '장원영',
        year : 2002,
    },
};
//안 에것은 또 아님..
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
