const express=require('express')

const app=express()
//this age checker is used as the middlewares
// it is used when no middleware is defined
// function isOldEnough(age){
//     if(age>=14)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function isOldEnoughMiddleware(req,res,next){
    const age =req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.status(411).json({
           msg:"You are not old enough to ride"
        })
    }
} 

// if certain middleware go to all the routes then we call it here 
app.use(isOldEnoughMiddleware); 

app.get('/ride1', function(req,res){ 
    res.json({
            msg:"you have successfully accept the ride1"
    }) 
})
 
app.get('/ride2', function(req,res){ 
    res.json({
            msg:"you have successfully accept the ride2"
    }) 
})

app.listen(3000)