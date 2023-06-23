const task=document.getElementById("input");
const taskList = [];
const completed = [];
const active = [];
let flag=0;

function addButton(event){
    if(event.key==="Enter")
    document.getElementById("inputbutton").click();
    }

function add(){
    for(i=0;i<taskList.length;i++)
    {
        if(taskList[i]==task.value)
          {
            alert("same task");
            flag=1;
          }
    }
    for(i=0;i<20;i++)
    {
    if(task.value==(i*" "))
       task.value="";
    else if(flag===0)
    {  
    taskList.unshift(task.value);
    active.unshift(task.value);
    // console.log(taskList);
    // console.log(active);
    allList();
    task.value="";
    break;
    }
    }
}

// console.log(taskList);

function complete(){
    // console.log(taskList);
    for(i=0;i<taskList.length;i++)
    {
        // if(taskList[i]===task.value)
        //   {
        //     active.splice(i,1)
        //   }
        console.log(taskList[i]);
        completed.unshift(taskList[i]);
    
    }
    // active.shift();
    allList();

    // console.log(completed);

}

function del(){
    for(i=0;i<taskList.length;i++)
    {
        if(taskList[i]==task.value)
          {
            // taskList.splice(i,1);
          }
    }
    for(i=0;i<active.length;i++)
    {
        if(active[i]==task.value)
          {
            // active.splice(i,1)
          }
    }
    taskList.shift();
    active.shift();
    allList();
}

function clearCompleted(){
    // completed.splice(0,completed.length);
}

function activeList(){
    document.getElementById("itemContainer").innerHTML="";
    for(i=0;i<active.length;i++)
    {
    document.getElementById("itemContainer").innerHTML+=`<div class="container-fluid d-flex justify-content-end bg-white rounded-5 px-5 py-3 mb-4" >
      <h3 class="fw-bolder align-center mx-5">${active[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="complete()"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="del()"><i class="fa-solid fa-dumpster"></i></button>
    </div>`
    }
}

function completedList(){
    // console.log(completed);
    document.getElementById("itemContainer").innerHTML="";
    for(i=0;i<completed.length;i++)
    {
        // console.log(completed[i]);
    document.getElementById("itemContainer").innerHTML+=`<div class="container-fluid d-flex justify-content-end bg-white rounded-5 px-5 py-3 mb-4" >
      <h3 class="fw-bolder align-center mx-5"> ${completed[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick=del()"><i class="fa-solid fa-dumpster"></i></button>
    </div>`
    }
}

function allList(){
    document.getElementById("itemContainer").innerHTML="";
    for(i=0;i<taskList.length;i++)
    {
    document.getElementById("itemContainer").innerHTML+=`<div class="item container-fluid d-flex justify-content-end bg-white rounded-5 px-5 py-3 mb-4" >
      <h3 class="item fw-bolder align-center mx-5">${taskList[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="complete(task.value)"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="del()"><i class="fa-solid fa-dumpster"></i></button>
    </div>`
    }
    // console.log(taskList);
    // console.log(task.value);
    // return task.value;
}



