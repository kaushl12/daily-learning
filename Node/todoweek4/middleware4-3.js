const express=require('express')
const app=express();

function checker(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next()
    }
    else{
        res.status(411).json({
            msg:"Sorry this is not for you!"
        })
    }
}
app.get('/ride1',checker,function(req,res){
    
        res.json({
            msg:"You are able to ride it"
        })
       
    
})
app.get('/ride2',checker,function(req,res){
    res.send('Ride 2')
})
app.get('/ride3',checker,function(req,res){
    res.send('Ride 3')
})
app.listen(3000)