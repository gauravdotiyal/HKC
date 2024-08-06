const express=require('express')

const app=express();

app.get(('/health-checkup'),function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;//headers present in our postman 
    const kidneyId=req.query.kidneyId; // query is in the http lind after ?

    if(username!="gaurav" && password!="pass"){
        res.status(400).json({
            msg:"Something is up with your inputs"
          })
        return;
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            msg:"Something is up with your inputs"
          })
        return;
    }
    
    // if everything is fine then use this
    res.json({
        msg:"Your kidney is fine"
    })

 
});

app.listen(3000);