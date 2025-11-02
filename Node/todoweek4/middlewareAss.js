const express=require('express')
const app=express()

app.use(function(req,res,next){
    const url=req.url
    const method=req.method
    const timestamp = new Date().toISOString();
    

    console.log(`time is:= ${timestamp} and method is ${method} Url is ${url}`)

    next()
})

app.get('/user',function(req,res){
    res.send("User Created")
})

app.listen(3000)