/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne();
// console.log('---------------');

function levelOne(){
    var numberOne = 40;
    console.log(numberOne);
}

// levelOne();
// console.log('---------------');

// console.log(numberOne);
// console.log('---------------');
function levelOne(){
    var numberOne = 40;
    function levelTwo(){
        var numberTwo = 99;

        console.log(`level Two numberTwo : ${numberTwo}`);
        console.log(`level Two numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`level One numberOne : ${numberOne}`);

}
levelOne();
console.log(numberOne);
// console.log(numberTwo);


/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic scope
 * 실행된 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;
    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne();

var i = 999;
//for문 안에 var로 실행하면 global이 바뀜
for (var i = 0; i < 10; i++)
{
    console.log(i);
}

console.log(`i in global scope: ${i}`);

i = 999;
//block level scope
//let은 아니여
for(let i = 0; i < 10; i++)
{
    console.log(i);
}

console.log(`i in global scope: ${i}`);

/**
 * var keyword는 함수 레벨 scope만
 * 
 * let, const keyword는 함수 레벨, 블록 레벨 scope를 만들어낸다
 */