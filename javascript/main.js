const task=document.getElementById("input");
const taskList = [];
const completed = [];
const active = [''];

function add(){
    taskList.unshift(task.value);
    active.unshift(task.value);

document.getElementById("itemContainer").innerHTML+=`<div class="d-flex bg-white rounded-5 px-5 py-3 mb-4" >
      <h3 class="fw-bolder text-center mx-5">${task.value}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="complete()"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="del()"><i class="fa-solid fa-dumpster"></i></button>
    </div>`
}

function complete(){
    active.shift(task.value);
    completed.unshift(task.value);
    document.getElementById("result").innerHTML=taskList;
}

function del(){
    taskList.shift(task.value);
    active.shift(task.value);
    document.getElementById("result").innerHTML=taskList;
}

function clearCompleted(){
    completed.splice(0,completed.length);
    document.getElementById("result").innerHTML=taskList;
}

function activeList(){
    document.getElementById("result").innerHTML=active;
}

function completedList(){
    document.getElementById("result").innerHTML=completed;
}

function allList(){
    document.getElementById("result").innerHTML=taskList;
}


