const mongoose = require("mongoose");
const express=require("express")
const app=express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://gauravdotiyal33:v5No29H7aGITXzHn@cluster0.aoipbr1.mongodb.net/userappnew"
);
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String
});

app.get('/signup',async function(req,res){
    
    const username=req.body.username
    const password=req.body.password
    const name=req.body.name

    const existingUser=await User.findOne({username});
    if(existingUser){
        return res.status(400).send("User already exists in db")
    }

    const user = new User({
        name: "gaurav",
        email: "gaurav33@gmail.com",
        password: "124",
      });
      user.save();
      res.json({
        msg:"new user created successfully"
      })
      
})

app.listen(3000);


