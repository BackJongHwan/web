const express = require('express');
const {v4: uuidv4} = require('uuid');
const {User, Domain} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{
    try{
        const user = await User.findOne({
            where: {id: req.user && req.user.id || null},
            include: {model : Domain},
        })
        res.render('login', {
            user,
            loginError: req.flash('loginError'),
            domains: user && user.domains,
        });
    }catch(err){
        next(err);
    }
});

router.post('/domain', async (req, res, next)=>{
    try{
        Domain.create({
            userId: req.user.id,
            host: req.body.host,
            type: req.body.type,
            clientSecret: uuidv4(),
        }) 
        res.redirect('/');
    }catch(err){
        next(err);
    }
});

module.exports = router;