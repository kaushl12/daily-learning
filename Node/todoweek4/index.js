const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());
let todos=[];

let idCounter=1;

app.post('/',function(req,res){
  const title=req.body.title;
  const newTodo={
    id:idCounter++,
    title:title
  }
  todos.push(newTodo)
  res.status(201).send(newTodo);
})

app.get('/todos',function(req,res){
  res.json(todos);
})

app.delete('/',function(req,res){
  const id=parseInt(req.body.id);

  if(!id) return res.status(400).send("id is required");

  const index=todos.findIndex(todo=>todo.id===id);

  if(id===-1) return res.status(404).send("Todo not found ");

  const removed=todos.splice(index,1);
  res.send(`Deleted todo is ${removed[0].title}`)

})

app.put('/updatetodo',function(req,res){
  const id=parseInt(req.body.id);

  const title=req.body.title;
  const todo=todos.find(todo=>todo.id===id);
  
  todo.title=title;
  res.json(todos);
})
app.listen(3000)