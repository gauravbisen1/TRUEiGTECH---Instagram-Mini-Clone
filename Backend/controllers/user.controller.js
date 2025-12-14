const express = require('express');
const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');

const followUser = asyncHandler(async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        console.log("REQ.USER:", req.user.id);

        const currentUser = await User.findById(req.user.id);

        if (!userToFollow || userToFollow.equals(currentUser._id)) {
            return res.status(400).json({ eror: 'Invalid user' });
        }
        if (!currentUser.following.includes(userToFollow._id)) {
            currentUser.following.push(userToFollow._id);
            userToFollow.followers.push(currentUser._id);
            await currentUser.save();
            await userToFollow.save();
        }
        res.status(200).json({ message: 'Followed' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "error in following" })
    }
})

const unfollowUser = asyncHandler(async (req, res) => {
    try {
        const userToUnFollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        currentUser.following = currentUser.following.filter(id => !id.equals(userToUnFollow._id));
        userToUnFollow.followers = userToUnFollow.followers.filter(id => !id.equals(currentUser._id))

        await currentUser.save();
        await userToUnFollow.save();

        res.status(200).json({ message: 'unFollowed' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "error in unfollowing" })
    }
})

module.exports = { followUser, unfollowUser }

