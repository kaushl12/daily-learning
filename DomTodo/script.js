// let ctr = 1;
// function addTodo() {
//   const input = document.getElementById("read");
//   const todo = input.value.trim();

//   const newEl = document.createElement("div");
//   document.querySelector("body").appendChild(newEl);
//   input.value="";

//   const span=document.createElement("span");
//   const button=document.createElement("button");

//   newEl.appendChild(span);
//   span.innerHTML=todo;

//   // let text = document.createTextNode("Delete");
//   button.innerHTML="Delete";
//   button.style.margin="3px";

//   newEl.appendChild(button)
// }
// function del(index) {
//   const element = document.getElementById("todo-" + index);
//   element.parentElement.removeChild(element);
// }
let todos = [];
function addTodo() {
  todos.push({
    title: document.getElementById("read").value,
  });
  render();
}
function deleteLastTodo() {
  todos.splice(todos.length - 1, 1);
  render();
}
function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}
  function createTodoComponent(todo) {
    const div = document.createElement("div");
    const btn = document.createElement("button");
    const h1 = document.createElement("h1");

    btn.innerHTML = "Delete";
    h1.innerHTML = todo.title;
    btn.onclick = function() {
      div.remove(); // Deletes the todo when button is clicked
  };
    div.append(h1);
    div.append(btn);

    return div;
}

function render() {
  document.querySelector("#todo").innerHTML = "";  
  
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i]);
    document.querySelector("#todo").append(element);
  }
}
