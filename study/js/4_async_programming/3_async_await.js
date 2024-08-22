/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('완료');
        // reject('에러');
    }, seconds * 1000);
});

async function runner(){
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('-------catch-------');
        console.log(e);
    }finally{
        console.log('----------finally-----------');
    }
}

console.log("hello");
runner();
console.log("hello");