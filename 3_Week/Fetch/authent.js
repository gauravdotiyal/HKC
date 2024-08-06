const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
// array of users details
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

//function to check that user exists in db or not 
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
   
   let userExists=false;
   for(let i=0;i<ALL_USERS.length;++i){
      if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
        userExists=true;
      }
   }

   return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  
  // if user exists user will get the token and return the token
  // with username and jstpassword
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });

});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  //without try and catch block
  //user will verified with the help of token 
  // and jwtpassword given during post request
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username; 
  
  //if user is verified then it will return array without user
  res.json({
   users:ALL_USERS.filter(function(value){
      if(value.username==username){
        return false;
      }
      else{
        return true;
      }
   })
  })
   

//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }

   
});

app.listen(3000)