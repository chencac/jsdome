document.addEventListener("DOMContentLoaded", ()=>{
    const taskInput = document.querySelector("#taskInput")
    const addBtn=document.querySelector("#addBtn")
    const todoList = document.querySelector(".todo-list")

    const createTaskIten =()=> {
        const task = taskInput.value
        const todoItem = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
      </li>`
      todoList.insertAdjacentHTML("afterbegin", todoItem)
      taskInput.value = ""
    }
    
    todoList.addEventListener("click",(e)=>{
    if(e.target.nodeName === "BUTTON"){
        e.target.parentNode.remove()
    }

    })
    taskInput.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            createTaskIten()
        }
    })
    addBtn.addEventListener("click",()=>{
        createTaskIten()
    })

})










// addBtn.addEventListener("click",(e)=>{
//     if(taskInput.value != ""){
//       const li = 
//     list.insertAdjacentElement("afterbegin",li)
//     taskInput.value = ""
//     }
// })


// --------------------------------------------------

// const addBtn = document.querySelector("#addBtn")
// const list = document.querySelector(".todo-list")
// const taskInput = document.querySelector("#taskInput")

// addBtn.addEventListener("click", (e) => {
//   if (taskInput.value != "") {
//     const li = document.createElement("li")
//     li.textContent = taskInput.value
//     li.className = "todo-item"
//     list.insertAdjacentElement("afterbegin", li)
//     taskInput.value = ""
//   }
// })

// call stack 呼叫堆疊
// execution Context -Ec -泡泡
// single thread 單執行緒
// setTimeout 
// callback Queue

