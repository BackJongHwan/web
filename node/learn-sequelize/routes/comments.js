var express = require('express');
var {User, Comment} = require('../models');
const comment = require('../models/comment');

var router = express.Router();

//promise version
// router.get('/:id', function(req, res, next){
//     Comment.findAll({
//         include:{
//             model: User,
//             where: {id : req.params.id},
//         },
//     })
//         .then((comments)=>{
//             console.log(comments) ;
//             res.json(comments);
//         })
//         .catch((err)=>{
//             console.error(err);
//             next(err);
//         });
// });

// router.post('/:id', function(req, res, next){
//     Comment.create({
//         commenter: req.body.id,
//         comment: req.body.comment,
//     })
//         .then((result)=>{
//             console.log(result) ;
//             res.status(201).json(result);
//         })
//         .catch((err)=>{
//             console.error(err);
//             next(err);
//         });
// });

// router.patch('/:id', function(req, res, next){
//     Comment.update({comment: req.body.comment}, {where : {id: req.params.id}})
//         .then((result)=>{
//             res.json(result);
//         })
//         .catch((err)=>{
//             console.error(err);
//             next(err);
//         });
// });

// router.delete('/:id', function(req, res, next){
//     Comment.destroy({where: {id:req.params.id}})
//         .then((result)=>{
//             res.json(result);
//         })
//         .result((err)=>{
//             console.error(err);
//             next(err);
//         });
// });
//async/awiat version
router.get('/:id', async function(req, res, next){
    try{
        const comments = await Comment.findAll({
            include:{
                model: User,
                where: {id : req.params.id},
            },
        });
        console.log(comments) ;
        res.json(comments);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/:id', async function(req, res, next){
    try{
        const result = await Comment.create({
            commenter: req.body.id,
            comment: req.body.comment,
        });
        console.log(result) ;
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.patch('/:id', async function(req, res, next){
    try{
        const result = await Comment.update({comment: req.body.comment}, {where : {id: req.params.id}});
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.delete('/:id', async function(req, res, next){
    try{
        const result = await Comment.destroy({where : {id: req.params.id}});
        res.json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});
module.exports = router;