/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적 
 * 2) 암묵적
 */
let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
console.log('------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof(99).toString(), (99).toString());
console.log(typeof(true).toString(), (true).toString());
console.log(typeof(Infinity).toString(), (Infinity).toString());
console.log('------------');

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.123123'));
console.log(typeof parseFloat('0.123'), parseFloat('0.123'));
console.log(typeof + "1", +'1');
console.log('------------');

/**
 * Boolean type으로 변환
 */
console.log(!!'x');
console.log(!!'');
console.log('------------');

console.log(!!0);
console.log(!!'0');
console.log('------------');

console.log(!!'false');
console.log(!!false);
console.log('------------');

console.log(!!undefined);
console.log(!!null);
console.log('------------');

console.log(!!{});
console.log(!![]);
console.log('------------');
/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 False를 반환한다.
 */