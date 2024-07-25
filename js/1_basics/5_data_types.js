/**
 * Data Types
 * 
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7)Object
 *  Function
 *  Array
 *  Object
 */
const age = 26;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('---------------');

/**
 * string type
 */

const codeFactory = "codefactory";
console.log(typeof codeFactory);
const ive = "'ive' anYuJin";
console.log(ive)



/**
 * Templeate Literal
 * EscapingCharacter
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) \\
 */

const iveYujin ='아이브\n안유진';
console.log(iveYujin);
const iveWonyoung ='ive\twonyoung';
console.log(iveWonyoung);
const backslach = 'ive\\codefactory';
console.log(backslach);


const iveWonyoung2 = `아이브 '''';""
장원영;
`;
console.log(iveWonyoung2);


const groudNmae = 'ive';
console.log(groudNmae + ' anYujin');
console.log(`${groudNmae} anYujin`);

/**
 * Boolean type
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefiend
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는 것은 지양해야한다j
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
/**
 * null type
 * 
 * undefiend와 마찬가지로 값이 없다는 뜻
 * js에서는 개발자가 명시적으로 업는 것으로
 */

let init=null;
console.log(init);
console.log(typeof init);


/**
 * Symbol type
 * 
 * 유일무이한 값을 생성할 때 사용된다.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * Object type
 * 
 *  Map
 *  key: value
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

/**
 *  array type
 *  value를 list로 나열
 */

const iveMembers = [
    'anYujin',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);
/**
     * index
     * 0부터 시작
 */
console.log(iveMembers[0]);
console.log(iveMembers[5]);

iveMembers[0] = 'codefactory';
console.log(iveMembers);
console.log(typeof iveMembers);
console.log(typeof iveMembers[0]);


/**
 * static typing -> C
 * dynamic typing -> python, js
 */