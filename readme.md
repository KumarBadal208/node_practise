# Node

### server create
```const express = require('express');

const app = express();

app.get('/user',(req, res, next)=>{
    console.log('user list');
    next();
},
(req,res)=>{
    res.send('second response');
}
)

app.use('/',(req,res)=>{
    res.send('hello there  !!');
})

app.listen(3000, ()=>{
    console.log("server is running on 3000");
})
```

####  next() -> this function calls next next route