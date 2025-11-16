const express = require("express");
const jwt = require("jsonwebtoken");
//  const cors=require("cors")
const app = express();
const JWT_SECRET = "streak ";

app.use(express.json()); //Type of middleware

const users = [];
function logger(req,res,next){
  console.log(req.method +" request came")
  next()
}
app.get('/',function(req,res){
  res.sendFile(__dirname+'/public/index.html')
})
app.post("/signup", logger,function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });
  res.json ({
    message: "You have Signed-Up Succesfully",
  });
  console.log(users);
});

app.post("/signin",logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const token = jwt.sign(
      {
        username: username,
        password: password,
      },
      JWT_SECRET
    );
    // user.token = token;
    res.json({
      token,
    });
    //console.log(users)
  } else{
    res.json({
      message:"Invalid Credentials"
    })
  }
  console.log(users);
});

function auth(req, res, next) {
  const token = req.headers.token;

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    } else {
      res.json({ message: "Please Login to Continue" });
    }
  } catch (err) {
    res.status(401).json({ message: "Invalid or Missing Token" });
  }
}



app.get("/me",logger,auth, function (req, res) {
 
  const user = users.find((user) => user.username === req.username);

    res.json({
      username: user.username,
      password: user.password,
    });
  
});
app.listen(3000);
