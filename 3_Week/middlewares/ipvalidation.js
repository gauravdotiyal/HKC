const express = require("express");
const zod = require("zod"); 
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

//
//{
//  email:email, @ .com
//  passowrd: length 8 
//  country: "IN" "US" 
//}

const schema1=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys); 
  console.log(response);
  if(!response.success){
    res.status(411).json({
        msg:"input is invalid"
    })
  }
  res.send({
    response
  });
});

//global catches
app.use(function (err, req, res, next) {
  res.json({
    msg: "Something is wrong with your server",
  });
});

app.listen(3000);
