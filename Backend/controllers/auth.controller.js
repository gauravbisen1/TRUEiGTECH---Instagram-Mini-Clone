const {jsonAuthMiddleware,generateToken} = require('../middlewares/auth.middleware')
const asyncHandler = require('../utils/asyncHandler')
const User = require('../models/user.model');


//signup
const registerUser = asyncHandler(async (req,res)=>{
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();

        const payload = {
            id: response.id,
            username: response.username
        }

        const token = generateToken(payload);
        console.log("Token is ", token);

        console.log("User saved :", response);
        res.status(201).json({response: response, token: token});
    } catch (error) {
        res.status(500).json({err: 'Error saving user'})
    }
})

//login
const loginUser = async(req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({err:'Invalid username or Password'});
        }
        const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload);
        res.json({
            token,
            user: {
                _id: user._id,
                username: user.username
            }
        });
        
    } catch (error) {
        console.log("Error during login", error);
        res.status(500).json({err: 'Internal Server error'})
        
    }
}

 

module.exports = {registerUser,loginUser}