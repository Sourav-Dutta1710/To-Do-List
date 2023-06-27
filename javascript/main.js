const task = document.getElementById("input");
const completed = [];
const active = [];
let flag;

function addButton(event) {
  if (event.key === "Enter") document.getElementById("inputbutton").click();
}

function add() {
  flag = 0;
  let task1 = task.value.trim();
  console.log(active[0]);
  for (i = 0; i < active.length; i++) {
    if (active[i] === task1) {
      alert("Repeated Task");
      task.value = "";
      flag = 1;
    }
  }
  if(task1==="") alert("Blank Task");
  else if (flag === 0) active.unshift(task.value);

  allList();
  task.value = "";
}

function complete(i) {
  completed.unshift(active[i]);
  active.splice(i, 1);
  allList();
}

function deleteActive(i) {
  active.splice(i, 1);
  allList();
}

function deleteCompleted(i) {
  completed.splice(i, 1);
  allList();
}

function completeActiveList(i) {
  completed.unshift(active[i]);
  active.splice(i, 1);
  activeList();
}

function deleteActiveList(i) {
  active.splice(i, 1);
  activeList();
}

function deleteCompletedList(i) {
  completed.splice(i, 1);
  completedList();
}

function pending(i) {
  active.unshift(completed[i]);
  completed.splice(i, 1);
  allList();
}

function pendingCompletedList(i) {
  active.unshift(completed[i]);
  completed.splice(i, 1);
  completedList();
}

function clearCompleted() {
  completed.splice(0, completed.length);
  allList();
}

function activeList() {
  document.getElementById("itemContainer").innerHTML = "";
  for (i = 0; i < active.length; i++) {
    document.getElementById("itemContainer").innerHTML += `<div class="d-flex justify-content-start bg-white rounded-5 p-3 mb-4" >
      <h3 class="fw-bolder align-center">${active[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="completeActiveList(${i})"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="deleteActiveList(${i})"><i class="fa-solid fa-dumpster"></i></button>
    </div>`;
  }
}

function completedList() {
  document.getElementById("itemContainer").innerHTML = "";
  for (i = 0; i < completed.length; i++) {
    document.getElementById("itemContainer").innerHTML += `<div class="d-flex justify-content-start bg-white rounded-5 p-3 mb-4" >
      <h3 class="completedItem fw-bolder align-center">${completed[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="pendingCompletedList(${i})"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="deleteCompletedList(${i})"><i class="fa-solid fa-dumpster"></i></button>
    </div>`;
  }
}

function allList() {
  document.getElementById("itemContainer").innerHTML = "";
  for (i = 0; i < completed.length; i++) {
    document.getElementById("itemContainer").innerHTML += `<div class="d-flex justify-content-start bg-white rounded-5 p-3 mb-4" >
      <h3 class="completedItem fw-bolder align-center">${completed[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="pending(${i})"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="deleteCompleted(${i})"><i class="fa-solid fa-dumpster"></i></button>
    </div>`;
  }
  for (i = 0; i < active.length; i++) {
    document.getElementById("itemContainer").innerHTML += `<div class="d-flex justify-content-start bg-white rounded-5 p-3 mb-4" >
      <h3 class="fw-bolder align-center">${active[i]}</h3>
      <button class="btn btn-dark text-white rounded-circle fw-bolder ms-5 me-2" onclick="complete(${i})"><i class="fa-solid fa-check"></i></button>
      <button class="btn btn-dark text-white rounded-circle fw-bolder mx-2" onclick="deleteActive(${i})"><i class="fa-solid fa-dumpster"></i></button>
    </div>`;
  }
}