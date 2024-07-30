/**
 * variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);


let ive = '아이브';
console.log(ive);

/**
 * let var로 선언하면
 * 바꿀 수 있다.
 */
ive = '장원영';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
// newJeans = '민지'; 안 되는거

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것
 * 2) 할당
 */
var name = '코트팩토리';
console.log(name);

let girlFriend; //declare만하면 undefined로 정의됨
console.log(girlFriend);
girlFriend = 'no';
console.log(girlFriend);