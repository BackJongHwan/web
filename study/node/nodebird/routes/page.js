const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {Post, User} = require('../models');
const router = express.Router();

router.get('/profile',isLoggedIn, (req, res)=>{
    res.render('profile', {title: '내 정보 - NodeBird', user: req.user});
});

router.patch('/profile', isLoggedIn, (req, res)=>{
    
})

router.get('/join',isNotLoggedIn, (req, res)=>{
    res.render('join', {
        title: '회원가입 - NodeBird',
        user: req.user,
        joinError: req.flash('joinError'),
    });
});

router.get('/', async (req, res, next)=>{
    try{
        const posts = await Post.findAll({
            include:{
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main',{
            titie: 'NodeBird',
            twits: posts,
            user: req.user,
            loginError: req.flash('loginError'),
        });
    }catch(err){
        console.error(err);
        next(err);
    }
});


module.exports = router;