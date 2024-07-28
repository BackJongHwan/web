/**
 * Object / 객체
 */

//key : value pair
let yuJin = {
    name : '안유진',
    group : 'ive',
    dance : function(){
        return `${this.name} 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = 'ive';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey] : groupValue,
    dance : function(){
        return `${this.name} 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());
yuJin2['group'] = 'codefactory';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);


/**
 * object의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다
 * 2) 객체 안의 property나 method는 변경 할 수 있다
 */

const wonYoung = {
    name: '장원영',
    group : 'ive',
}

console.log(wonYoung);

// wonYoung = {};

wonYoung['group'] = 'codefactroy';
console.log(wonYoung);

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));
/**
 * 모든 value값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name,
    // name : name,
}
console.log(yuJin3);