import mongoose from 'mongoose'
import User from '../models/auth.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        const allUserDetails = []
        allUsers.forEach(users => {
            allUserDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedOn: users.joinedOn, followedUsers:users.followedUsers })
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name, about, tags } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const updatedProfile = await User.findByIdAndUpdate( _id, { $set: { 'name': name, 'about': about, 'tags': tags }}, { new: true } )
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message })
    }
}

export const followUser = async(req,res) => {
    console.log(req.body);
    const {id , usersfollowing} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('user unavailable...');
    }

    try {
        await User.findByIdAndUpdate(id , {$set:{'followedUsers' : usersfollowing}})
        const follow = await User.findById(id)
        res.status(200).json(follow)
    } catch (error) {
        res.status(405).json({ message: error.message })
    }
}