alert("hello write your todays plan");
window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector(".tasks");
  const main = document.querySelector(".task-list");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill out the input.");
      return;
    }
    // adding new task
    const task_el = document.createElement("div");
    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_el.classList.add("task");
    list_el.append(task_el);
    const task_cont = document.createElement("div");
    task_cont.classList.add("content");
    task_el.appendChild(task_cont);
    task_cont.appendChild(task_input_el);
    // edit button
    const actions_el = document.createElement("div");
    actions_el.classList.add("actions");
    task_cont.appendChild(actions_el);
    const edit_el = document.createElement("button");
    edit_el.classList.add("edit");
    edit_el.textContent = "Edit";
    actions_el.appendChild(edit_el);
    // delete button
    const delete_el = document.createElement("button");
    delete_el.classList.add("delete");
    delete_el.textContent = "Delete";
    actions_el.appendChild(delete_el);

    edit_el.addEventListener("click", () => {
      if (edit_el.innerText.toLowerCase() === "edit") {
        task_input_el.focus();
        edit_el.textContent = "SAVE";
        task_input_el.removeAttribute("readonly");
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        edit_el.innerText = "edit";
      }
    });
    delete_el.addEventListener("click", () => {
      task_el.remove();
    });
    list_el.appendChild(task_el);
    task_el.appendChild(actions_el);
    input.value = "";
  });
});
