const express=require('express')
const app=express()

let reqcount=0;
app.use(function(req,res,next){
    if (req.path !== '/total') {
        reqcount++;
    }
    
    next()
})

 app.get('/visit',function(req,res){
    res.send('You Visited')
 })
 app.get('/home',function(req,res){
    res.send('You Visited home')
 })
app.get('/total',function(req,res){
    res.json({
        Total: reqcount,
        time : new Date().toISOString()
    })
})
app.listen(3000)
