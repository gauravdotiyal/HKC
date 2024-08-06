const express=require('express')

const app=express()

//middleware whole code
function userMiddleware(req,res,next){
   if(req.headers.username!='gaurav' || req.headers.password!='pass'){
      res.status(403).json({
        msg:"You have wrong input for username and password"
      })
   }
   else{
    next()
   }
};

//middleware for kidney
function kidneyMiddleware(req,res,next){
    if(req.query.kidneyId!=1 && req.query.kidneyId!=2){
        res.status(403).json({
            msg:"You have wrong inputs for kidney"
        })
    }
    else{
        next()
    }
}

app.get('/health-checkup', userMiddleware,kidneyMiddleware,function(req,res){
    res.send("Your kidney is Ok")
})

app.get('/heart-checkup',userMiddleware,kidneyMiddleware,function(req,res){
    res.send("Your heart is OK");
})

app.listen(3000);