const mongoose = require('mongoose');

module.exports = () =>{
    const connect = async () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        try {
            await mongoose.connect('mongodb://back:drjh9095@localhost:27017/admin', {
                dbName: 'nodejs',
            });
            console.log('몽고디비 연결 성공');
        } catch (error) {
            console.error('몽고디비 연결 에러', error);
        }
    };
    connect();
    mongoose.connection.on('error', (error)=>{
        console.error('몽고디비 연결 에러', error);
    });
    mongoose.connection.on('disconnected', ()=>{
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다');
        connect();
    });
    require('./user');
    require('./comment');
};