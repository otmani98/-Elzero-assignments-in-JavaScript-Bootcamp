//stoping form from submiting and reloading the page
let form = document.forms[0];
form.onsubmit = function (e) {
  e.preventDefault();
};

//check if there key tasks in local and if it isn't add it
if (!window.localStorage.tasks) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

//show tasks if they exist
checktasks();

//add new task to local storage
let input = form.childNodes[1];
let submit = form.childNodes[3];

input.addEventListener("input", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  submit.onclick = function () {
    if (input.value) {
      if (tasks.length === 0) {
        tasks.push({
          id: 156547312362,
          title: input.value,
        });
      } else {
        tasks.push({
          id: tasks[tasks.length - 1].id + 1,
          title: input.value,
        });
      }
      input.value = "";
      localStorage.setItem("tasks", JSON.stringify(tasks));
      checktasks();
    }
  };
});

// function delete button
document.addEventListener("click", function () {
  document.querySelectorAll("[name='remove']").forEach((element) => {
    element.onclick = function () {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      for (const task of tasks) {
        if (task.id === Number(element.id)) {
          let index = tasks.indexOf(task);
          tasks.splice(index, 1);
        }
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      checktasks();
    };
  });
});

//function show tasks if they exist
function checktasks() {
  let tasksdiv = document.querySelector(".tasks");
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasksdiv.innerHTML = "<ul>";
  if (tasks.length > 0) {
    tasksdiv.innerHTML = "<ul>";
    for (const task of tasks) {
      tasksdiv.innerHTML += `<li>${task.title} <button type="submit" name="remove" id="${task.id}">Delete</button></li>`;
    }
    tasksdiv.innerHTML += "</ul>";
  }
}
