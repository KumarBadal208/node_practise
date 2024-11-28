const express = require('express');
const auth = require('./middleware/auth');

const app = express();

app.get('/user',auth, (req, res, next)=>{
    console.log('user list');
    next();
},
(req,res)=>{
    res.send('second response');
}
);

app.get('/getUserData',(req,res)=>{
    throw new Error("hfadsjk");
    res.send("user data sent");
})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('internal server error');
    }
});

// app.use('/',(req,res)=>{
//     res.send('hello there  !!');
// })

app.listen(3000, ()=>{
    console.log("server is running on 3000");
})