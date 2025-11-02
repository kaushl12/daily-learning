import express from 'express'
const app=express()


app.get('/welcome',(req,res)=>{
    res.send('Server is ready')
})
app.get('/users',(req,res)=>{
    const users=
        [
            {
                id: 1,
                name:"Kaushal",
                age:20
            },
            {
                id: 2,
                name:"Jay",
                age:22
            },
            {
                id: 3,
                name:"Amish",
                age:26
            },
        ]
        res.send(users)
    
})


const port=process.env.port || 3000
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})