const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    try {
        const token = req.headers["authtoken"];

        if (!token) {
            return res.status(401).sent('NO Token')
        }
        const decoded = jwt.verify(token, 'jwtSecret');

        console.log("middleware", decoded);
        req.user = decoded.user 
        next()

    }catch(err) {
        console.log(err);
        res.status(401).send('Token is invalid');
    }
};

exports.adminCheck = async (req, res, next) => {
    try {
       const { username } = req.user
       const adminUser = await User.findOne({ username }).exec()
       if(adminUser.role !== 'admin'){
        res.status(403).send(err,'คุณไม่ใช่ADMIN')
       } else{
        next()
       }
       
    }catch(err) {
        console.log(err);
        res.status(401).send('คุณไม่ใช่ADMIN');
    }
};