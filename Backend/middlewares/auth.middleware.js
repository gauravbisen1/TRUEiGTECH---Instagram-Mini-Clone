const jwt = require('jsonwebtoken')

const jsonAuthMiddleware = (req,res,next)=>{
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({message: 'token not found'});

    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({message:'Unauthorized'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: decoded.id};
        next();
    } catch (error) {
        console.log('JWT VERIFICATION FAILED:',error);
        return res.status(401).json({message: 'Invalid token'});
    }
};

const generateToken = (payload) =>{
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});
}

module.exports = {jsonAuthMiddleware, generateToken};