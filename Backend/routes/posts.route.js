const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const { jsonAuthMiddleware } = require('../middlewares/auth.middleware')

//create post
router.post('/',jsonAuthMiddleware, async (req, res) => {
    try {
        const {imageUrl, caption} = req.body;
        const post = await Post.create({imageUrl,caption, user:req.user.id});
        console.log("Post saved!");
        res.status(201).json(post);
    } catch (error) {
        console.log("Error savinf post:", error);
        res.status(500).json({ err: 'Error saving post' });
    }
});

//get post 
router.get('/', jsonAuthMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const posts = await Post.find({
            user: {$in: user.following}
        })
        .populate('user','username')
        .populate('comments.user', 'username')
        .sort({createdAt: -1});
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json(err);
        console.log("Error retriving data", err);
    }
})

//like
router.put('/:id/like',jsonAuthMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({error: "Post not found"})
        }
        if (!post.likes.includes(req.user.id)) {
            post.likes.push(req.user.id);
        }
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(404).json({ error: "Post not found" })
    }
})
//unlike
router.put('/:id/unlike',jsonAuthMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({error: "Post not found"})
        }
        post.likes = post.likes.filter(id => !id.equals(req.user.id));
        await post.save();
        res.json( post);
    } catch (error) {
        res.status(404).json({ error: "Post not found" })
    }
})

//comment
router.post('/:id/comment', jsonAuthMiddleware, async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({
            user: req.user.id,
            text: req.body.text
        })
        const response = await post.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: "error while creating comment"});
    }
})

module.exports = router;
