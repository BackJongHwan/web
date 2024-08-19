const express = require('express');
const jwt = require('jsonwebtoken');

const {verifyToken} = require('./middlewares');
const { Domain, User, Post, Hashtag } = require('../models');

const router = express.Router();

router.post('/token', async(req, res)=>{
    const {clientSecret} = req.body;
    try{
        const domain = await Domain.fineOne({
            where:{clientSecret},
            model: User,
            attributes: ['nick', 'id'],
        },
    );
        if(!domain){
            return res.status(401).json({
                code: 401,
                message: 'not assigned domain. first assign domain',
            });
        }
        const token = jwt.sign({
            id: domain.user.id,
            nick: domain.user.nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '1m',
            issuer: 'nodebird',
        });
        return res.json({
            code:200,
            message: '토큰이 발급되었습니다',
            token,
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            code: 500,
            message: 'server error',
        });
    }
});

router.get('/test', verifyToken, (req, res)=>{
    res.json(req.decoded);
});

module.exports = router;