/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자데 * 10 / 2 % 3 스트링으로 변환해서 반환
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
/**
 * Dry
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(){
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();


function  calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);

/**
 * parameter -> function(parameter)
 * argument  -> calulator(argument)
 */

calculate(5);

function multiply(x, y){
    console.log(x * y);
}

multiply(3, 2);

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2, 4);
multiply(3);

/**
 * get return
 */
console.log('-------------------');
function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow function
 */
const multiply2 = (x, y) =>{
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x : ${x}, y: ${y}, z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x : ${x}, y: ${y}, z:${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y){
    return x * y;
}
console.log(multiplyTwo(4, 5));


const multiplyThree = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}
console.log('-------------------');
console.log(multiplyThree(4, 5, 6));


const multiplyAll = function(...argument){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 6, 7, 8));
// immediately invoked fucntion
(function(x, y){
    console.log(x * y);
})(2, 3)


console.log(typeof multiply);
console.log(multiply instanceof Object);