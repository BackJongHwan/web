const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
    cert: fs.readFileSync('domain path'),
    key: fs.readFileSync('domain path'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
},(req,res)=>{
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, ()=>{
    console.log('443번 포트에서 서버 대기 중입니다!');
});