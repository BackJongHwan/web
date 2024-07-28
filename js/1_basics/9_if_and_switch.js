/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0){
    console.log('number is even');
}else{
    console.log('number is odd');
}

if(number % 2 === 0){
    console.log('2');
}else if(number % 3 === 0){
    console.log('3');
}else if(number % 4 === 0){
    console.log('4');
}else if(number % 5 === 0){
    console.log('5');
}else{
    console.log('2, 3, 4, 5');
}

const englishDay = 'monay';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break
    case 'Tuesday':
        koreanDay = '화요일';
        break
    default:
        koreanDay = 'idk';
        break
}
console.log(koreanDay);