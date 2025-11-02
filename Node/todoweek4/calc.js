const express=require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
//app.use(cors());
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/cors5-2.html")
})

app.post('/sum',function(req,res){
    const a=parseInt(req.body.a)
    const b=parseInt(req.body.b)
    res.json({
        ans:a + b
    })
})
app.get('/sub',function(req,res){
    const a=parseInt(req.body.a)
    const b=parseInt(req.body.b)
    res.json({
        ans:a-b
    })
})
app.get('/mul',function(req,res){
    const a=req.body.a
    const b=req.body.b
    res.json({
        ans:a*b
    })
})
app.get('/div',function(req,res){
    const a=req.body.a
    const b=req.body.b
    res.json({
        ans:a/b
    })
})
app.listen(3000)