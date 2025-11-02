const express=require('express')
const app=express()

app.get('/check', (req, res) => {
    const token = req.headers['authorization'];
    console.log(token);
    res.send("Header received");
  });
  
  app.listen(3000)