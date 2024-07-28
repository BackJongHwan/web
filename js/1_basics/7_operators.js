/**
 * Opreators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('--------------');

console.log(10 *(10 + 10));
/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);
number--;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);
/**
 * 쓸일 없음
 */
// result = ++number;
// console.log(result, number);

// result = --number;
// console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, -
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = 'anYujin';
console.log(+sample);//NaN = not a number
console.log(typeof +sample);

sample = '99';
console.log(-sample);
console.log(typeof +sample);

/**
 * Assignment operator
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number *= 10;
console.log(number);

number /=10;
console.log(number);

number %=10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) value -> 안 쓰임
 * 2) value and type
 */
//1
console.log(5 == 5);
console.log(5 =='5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log('----------');
//2 -> 무조건 이거
console.log(5 === 5);
console.log(5 ==='5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log('----------');

console.log(5 != 5);
console.log(5 !='5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log('----------');
console.log(5 !== 5);
console.log(5 !=='5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log('----------');

/**
 * 대소 관계 비교
 */
console.log(100>1);
console.log(100<1);
console.log(100<=1);
console.log(100>=1);


/**
 * ternary operator
 */
console.log(10 > 0 ? '10 > 0' : '10 < 0');
console.log('----------');

/**
 * 논리 연산자
 * 1) &&
 * 2) || 
 */
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log('----------');

// || 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log('----------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log('----------');
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log('----------');


/**
 * short circuit evaluation
 * && left = true -> right
 * && left = false -> left
 * || left = true -> left
 * || left = false -> right
 */ 

console.log(true || 'ive');
console.log(false || 'ive');
console.log(false && 'ive');
console.log(true && 'ive');
console.log('----------');

console.log(true && true && 'ive');
console.log(true && false && 'ive');
console.log('----------');

/**
 * 지수 연산자
 */
console.log( 2** 2);
console.log( 10** 4);
/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? 'codefactroy';
console.log(name);

name = name ?? 'ive';
console.log(name);

console.log('----------');

let name2;
name2 ??= 'codefactory';
console.log(name2);
