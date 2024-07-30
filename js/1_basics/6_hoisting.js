/**
 * Hoisting
 */
console.log("Hello");
console.log('World');

// console.log(name); //hositing의 예
// var name = 'codefactory';
// console.log(name);
/**
 * Hosting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 
 * 이동되는 것처럼 느껴지는 현상
 * 
 */

//var keyword는 막아주지못함
var name;
console.log(name);
name = 'codefactory';
console.log(name);

console.log(yuJin);
// let yuJin = 'anYuJin';
const yuJin = 'anYuJin';