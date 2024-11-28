const auth = (req,res, next)=>{
    const x_token = "xyz";
    const reqID = "xyz";
    if(reqID!==x_token){
        res.send("Unauthorised User!!!");
    }
    next();
};

module.exports = auth;