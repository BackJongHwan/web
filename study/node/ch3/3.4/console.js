const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};

console.time('total time');
console.log('normal log using , various value');
console.log(string, number, boolean);
console.error('error message in console.error');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('time check');
for (let i = 0; i< 100000;i++){
    continue;
}
console.timeEnd('time check');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();

console.timeEnd('total time');
