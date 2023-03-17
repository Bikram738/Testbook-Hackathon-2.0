const mainInput = document.querySelector(".input");
const addButton = document.querySelector(".add");
const ulList = document.querySelector("ul");
const listBox = document.querySelector(".lists");
const updatebox = document.querySelector(".edit-task");
const updateInput = document.querySelector(".edit-task input");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel");

//add task
function creatTask() {
  if (mainInput.value == "") {
    alert("please enter a task");
  } else {
    const li = document.createElement("li");
    li.setAttribute("class", "task-list");
    li.innerHTML = `${mainInput.value}<div class="action doneTask"><button class="done" onclick="markDone(event)"><i class="fa-solid fa-check"></i></button>
        <button class="edit" onclick="updateFnc(event)"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete" onclick="del(event)"><i class="fa-solid fa-xmark"></i></button></div>`;
    ulList.appendChild(li);
  }
  mainInput.value = "";
  mainInput.focus();
}

//delete task
function del(event) {
  let list = event.target.closest("li");
  list.remove();
  countList -= 1;
}
//mark done task
function markDone(event) {
  event.target.closest("li").classList.toggle("doneTask");
}

//update section
function updateFnc(event) {
  listBox.style.display = "none";
  updatebox.style.display = "block";
  updateInput.focus();
  edit = event.target.closest("li");
  let text = edit.firstChild.textContent;
  updateInput.value = text;
  return edit;
}

//sunbmit button
function submit() {
  UpdatedText = updateInput.value;
  edit.innerHTML = `${UpdatedText}<div class="action doneTask"><button class="done" onclick="markDone(event)"><i class="fa-solid fa-check"></i></button>
    <button class="edit" onclick="updateFnc(event)"><i class="fa-regular fa-pen-to-square"></i></button>
<button class="delete" onclick="del(event)"><i class="fa-solid fa-xmark"></i></button></div>`;

  listBox.style.display = "block";
  updatebox.style.display = "none";
}
//close the edit window or cancel
function cancelEdit() {
  listBox.style.display = "block";
  updatebox.style.display = "none";
}

addButton.addEventListener("click", creatTask);
submitBtn.addEventListener("click", submit);
cancelBtn.addEventListener("click", cancelEdit);
