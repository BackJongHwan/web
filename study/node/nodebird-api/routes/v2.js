const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const {verifyToken, apiLimiter} = require('./middlewares');
const {Domain, User, Post, Hashtag} = require('../models');

const router = express.Router();
router.use(cors());

router.post('/token',apiLimiter ,async(req, res)=>{
    const {clientSecret} = req.body;
    try{
        const domain = await Domain.findOne({
            where: {clientSecret},
            include: {
                model: User,
                attributes: ['nick', 'id'],
            },
        });
        if(!domain){
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
            });
        }
        const token = jwt.sign({
            id: domain.User.id,
            nick: domain.User.nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '30m',
            issuer: 'nodebird',
        });
        return res.json({
            code: 200,
            message: '토큰이 발급되었습니다',
            token,
        });
    }catch(err){
        console.error(err) ;
        return res.status(500).json({
            code:500,
            message: 'server error',
        });
    }
});

router.get('/test', verifyToken,apiLimiter, (req, res)=>{
    res.json(req.decoded);
});

router.get('/posts/my', apiLimiter,verifyToken, async (req, res)=>{
    try{
        const posts = await Post.findAll({where:{userId: req.decoded.id}});
        console.log(posts);
        res.json({
            code: 200,
            payloads: posts,
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            code:500,
            message: 'server error',
        });
    }
});

router.get('/posts/hashtag/:title', verifyToken,apiLimiter, async(req, res)=>{
    try{
        const hashtag = await Hashtag.findOne({where:{title: req.params.title}});
        if(!hashtag){
            return res.status(404).json({
                code:404,
                message: '검색 결과가 없습니다',
            });
        }
        const posts = await hashtag.getPosts();
        return res.json({
            code:200,
            payload: posts,
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            code:500,
            message:'server error',
        });
    }
});

module.exports = router;